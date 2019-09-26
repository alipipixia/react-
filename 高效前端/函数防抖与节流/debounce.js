function debounced(func, wait, options) {
  let lastArgs, //debounce被调用后被赋值,表示至少调用debounce一次
    lastThis, //保存this
    maxWait, // 最大等待时间
    result, // return 的结果,可能一直为undefined
    timerId, //定时器句柄
    lastCallTime; // 上一次调用debounce的事件,按上面的例子可以理解为上一次触发//scrollde 的时间
  let lastInvokeTime = 0 //上一次执行func的时间,按上面例子可以理解为上次执行的时间
  let leading = false //是否第一次触发立即执行
  let maxing = false //是否有最长等待时间
  let trailing = true // 是否在等待周期结束后执行用户传入的函数

  if (typeof func != 'function') {
    throw new TypeError('Expected a function')
  }
  wait = +wait || 0
  if (Object.prototype.toString.call(options) === '[object Object]') {
    leading = !!options.leading
    maxing = 'maxWait' in options
    maxWait = maxing ? Math.max(+options.maxWait||0, wait):maxWait
    trailing = 'trailing' in options ? !!options.trailing : trailing
  }

  // 执行(调用) 用户传入的func
  // 重置lastArgs,lastThis
  // lastInvokeTime在此时被赋值,记录上一次调用func的时间
  function invokeFunc(time) {
    const args = lastArgs
    const thisArg = lastThis
    
    lastArgs = lastThis = undefined
    lastInvokeTime = time
    result = func.apply(thisArg, args)
    return result
  }
  // setTimeout一个定时器
  function startTimer(pendingFunc, wait) {
    return setTimeout(pendingFunc, wait);
  }
  // 清楚定时器
  function cancelTimer(id) {
    clearTimeout(id)
  }

  // 防抖开始执行的操作
  // lastInvokeTime 在此时被赋值,记录上一次调用func的时间
  // 设置了立即执行func,则执行func,否则设置定时器
  function leadingEdge(time) {
    // Reset any 'maxWait' timer
    lastInvokeTime = time
    // Start the timer for the trailing edge
    timerId = startTimer(timeExpired, wait)
    // Invoke the leading edge
    return leading ? invokeFunc(time) : result 
  }
  // 计算还需要等待多久
  // 没设置最大等待时间,结果我为wait-(当前时间-上一次触发(scroll))时间,也就是wait-已经等候时间
  // 设置了最长等待时间,结果为最长等待时间和按照wait计算还需要等待时间的最小值
  function remainingWait(time) {
    const timeSinceLastCall = time - lastCallTime
    const timeSinceLastInvoke = time - lastInvokeTime
    const timeWaiting = wait - timeSinceLastCall
    return maxing ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting
  }
  // 此时是否设置定时器/执行用户传入的函数,有四种情况应该执行
  // 1.第一次触发scroll
  // 2.距离上次触发超过wait,参考上面例子中1.5s触发一次,在3s触发的情况
  // 3.当前时间小于 上次触发时间,大概是hi系统时间被认为的往后拨了,本来2018年,系统时间变为2017年了
  // 4.设置了最长等待时间,并且等待时长不小于最长等待时间了 参考上面例子,如果maxWait为2s,则在2s scroll时会执行
  function shouldInvoke(time) {
    const timeSinceLastCall = time - lastCallTime
    const timeSinceLastInvoke = time - lastInvokeTime

    return (lastCallTime === undefined || (timeSinceLastCall>=wait)||(timeSinceLastCall<0)||(maxing && timeSinceLastInvoke >= maxWait))
  }

  // 执行函数呢 还是继续设置定时器?防抖的核心
  // 时间满足条件,执行 
  // 否则 重新设置定时器
  function timeExpired() {
    const time = Date.now()
    if (shouldInvoke(time)) {
      return trailingEdge(time)
    }
    // Restart the timer
    timerId = startTimer(timeExpired, remainingWait)
  }


  // 执行用户传入的func之前的最后一道屏障
  // 重置 定时器
  // 执行 func
  // 重置 lastArgs = lastThis 为undefined
  function trailingEdge(time) {
    timerId = undefined

    // Only invoke if we have 'lastArgs' which means 'func' has been debounce at least once
    if (trailing && lastArgs) {
      return invokeFunc(time)
    }

    lastArgs = lastThis = undefined
    return result
  }
  // 取消防抖
  // 重置所有变量 清楚定时器
  function cancel() {
    if (timerId !== undefined) {
      cancelTimer(timerId)
    }
    lastInvokeTime = 0
    lastArgs = lastCallTime = lastThis = timerId = undefined
  }
  // 定时器已存在,去执行
  function flush() {
    return timerId === undefined ? result : trailing(Date.now())
  }

  // 是否正在等待中
  function pending() {
    return timerId !== undefined
  }

  function debounced(...args) {
    const time = Date.now()
    const isInvoking = shouldInvoke(time)
    console.log(args)
    lastArgs = args //args是event对象,是点击/scroll事件传过来的
    lastThis = this
    lastCallTime = time
    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime)
      }
      if (maxing) {
        // Handle invocations in a tight loop
        timerId = startTimer(timeExpired, wait)
        return invokeFunc(lastCallTime)
      }
    }

    if (timerId === undefined) {
      timerId = startTimer(timeExpired, wait)
    }
    return result
  }

  debounced.cancel = cancel
  debounced.flush = flush
  debounced.pending = pending
  
  return debounced
}

// export default debounce;