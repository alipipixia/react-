import * as ActionTypes from '../ActionTypes';
import AppDispatcher from '../AppDispatcher';

import EventEmitter from 'events'

const CHANGE_EVENT = 'changed';
const counterValues = {
    'First': 0,
    'Second':10,
    'Third': 30
};

//让CounterStore扩展了EventEmitter.prototype,等于让CounterStore成了EventEmitter对象
//一个EventEmitter实例对象试吃下列相关函数
//emit函数,可以广播一个特定事件类型,第一个参数是字符串类型的事件名称
//on函数,可以增加一个挂在这个EventEmitter对象特定事件上的出来函数,第一个参数是字符串类型的事件名称,第二个参数是处理函数
// removeListener函数,和on函数做的事情相反,删除在这个EventEmiter对象上的特定事件处理函数,和on一样,第一个参数是事件名称,第二个参数是处理函数.要注意,如果要调用removeListener函数,就一定要保留对处理函数的引用
const CounterStore = Object.assign({}, EventEmitter.prototype, {
    getCounterValues: function() {
        return counterValues;  //用于让应用中娶她模块可以读取当前的计数值,当前的技术值存储在文武兼模块级的变量counterValues中
    },
    emitChange: function() {
        this.emit(CHANGE_EVENT); //广播一个特定事件类型,第一个参数是字符串类型的事件名称
    },
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback); //增加一个挂在EventEmitter对象特定事件上的处理函数
    },
    removeChangeListener: function (callback) {
        this.remove(CHANGE_EVENT, callback);
    }
})

// 把CounterStore注册到全局唯一的Dispatcher上去 Dispatcher有一个函数叫register,接受一个回调函数作为参数,返回一个token,这个token可以用于store之间的同步
CounterStore.dispatchToken = AppDispatcher.register((action)=>{
    if(action.type === ActionTypes.INCREMENT) {
        counterValues[action.counterCaption]++;
        CounterStore.emitChange();
    } else if (action.type === ActionTypes.DECREMENT) {
        counterValues[action.counterCaption]--;
        CounterStore.emitChange();
    }
})
//当通过register函数把一个回调函数注册到Dispatcher之后,所有派发给Dispatcher的action对象,都会传递到这个回调函数中来

export default CounterStore;

