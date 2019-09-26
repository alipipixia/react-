import react from 'react';
import AddTodo from './addTodo';
import TodoList from './todoList';
import './style.css';

const Todos = () => {
    return (
        <div className="todos">
            <AddTodo/>
            <TodoList/>
        </div>
    )
}