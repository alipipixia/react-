import {createStore, combineReducers} from 'redux';
import { reducer as todoReducer } from './todos'
import { reducer as filterReducer} from './filter'

const reducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer,
})

//combineReducers接受一个对象作为参数
//参数对象上的每个字段名，对应了State状态上的字段名
//每个字段的指都是一个reducer函数

//返回值
//combineReducers函数的返回值是一个新的reducer函数，当这个新的reducer函数被执行时，会把传入的state参数对象拆开处理。todos字段下的子状态交给todosReducer,filer字段下的子状态交给filterReducer处理，然后在把这两个调用的返回结果合并成一个新的state,作为整体的state的返回结果 

export default createStore(reducer);