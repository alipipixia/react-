import { createStore } from 'redux';
import reducer from './Reducer';

const initValues = {
    "First": 0,
    "Second": 10,
    "Third": 30,
}

const store = createStore(reducer, initValues); // CreateStore参数一:reducer,参数二:初始值

export default store;
