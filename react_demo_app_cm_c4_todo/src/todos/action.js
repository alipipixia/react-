import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actionTypes';

let nextTodoId = 0;

export const addTodo = (text) => ({
    type: ADD_TODO,
    completed: false,
    id: nextTodoId++, //实现为每个产生的代办事项赋予一个唯一id的方法
    text: text,
});

//对于一个只return一个对象的函数体，es6允许简写为省去return,直接用圆括号把返回的对象包起来就行
export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id: id,
})

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    id: id,
})