import * as ActionTypes from './ActionTypes';
import AppDispatcher from './AppDispatcher';

export const increment = (counterCaption) => {
    AppDispatcher.dispatch({
        type: ActionTypes.INCREMENT,
        counterCaption: counterCaption
    });
}

export const decrement = (counterCaption) => {
    AppDispatcher.dispatch({
        type: ActionTypes.DECREMENT,
        counterCaption: counterCaption
    });
}

//里面定义的不是action对象本身，而是能够产生并派发action对象的函数
//导出两个action的构造函数increment和decrement,当两个函数被调用的术后,创造了对应的action对象,并立即通过AppDispatcher.dispatcher函数派发出去