import * as ActionTypes from '../ActionTypes';
import AppDispatcher from '../AppDispatcher';
import CounterStore from './CounterStore'
import EventEmitter from 'events';

const CHANGE_EVENT = 'changed';

function computeSummary(counterValues) {
    let summary = 0;
    for (const key in counterValues) {
        if (counterValues.hasOwnProperty(key)) {
            summary += counterValues[key];
        }
    }
    return summary;
}

const SummaryStore = Object.assign({}, EventEmitter.prototype, {
    getSummary: function() {
        return computeSummary(CounterStore.getCounterValues()); //CounterStore中的getCounterValues用于其他模块读取counterValue;
    },  

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addEventListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeEventListener: function(callback) {
        this.remove(CHANGE_EVENT, callback);
    }

});


SummaryStore.dispatchToken = AppDispatcher.register((action)=>{
    if ( (action.type === ActionTypes.INCREMENT) ||
         (action.type === ActionTypes.DECREMENT) ){
        AppDispatcher.waitFor[CounterStore.dispatchToken];
        
        SummaryStore.emitChange(); //通过emitChange通知监听者
    }
}); 

export default SummaryStore;

//Diapatcher的waitFor函数可以接受一个数组作为参数,数组中国的每个元素都是一个Dispatcher..register函数的返回结果,也就是所谓的dispatchToken. 这个waitFor函数高祖Dispatcher当前的处理必须要暂停,直到dispatchToken代表的那些注册回调函数执行结束才能继续