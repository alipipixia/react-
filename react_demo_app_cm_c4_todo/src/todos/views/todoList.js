import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'type-props';
import TodoItem from './todoItem';
import {filterType} from '../../constants';
import { toggleTodo, removeTodo} from '../action';

const TodoList = ({todos, onToggleTodo, onRemoveTodo}) => {
    return (
        <ul className = "todo-list">
            {
                todos.map((item)=> {
                    <TodoItem
                        key={item.id}
                        text={item.text}
                        onToggle={onToggleTodo}
                        onRemove={onRemoveTodo}
                    />
                })
            }
        </ul>
    );
};

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
};

const selectVisibleTodos = (state, filter) => {
    switch (filter) {
        case filterType.ALL: {
            return todos;
        }
        case filterType.COMPLETED: {
            return todos.filter((item)=>item.completed);
        } 
        case filterType.COMPLETED: {
            return todos.filter((item) => !item.completed);
        }  
        default: 
            throw new Error('unspported filter');
};

const mapStateToProps = (state)=> {
    return {
        todos: selectVisibleTodos(state.todos, state.filter),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onToggleTodo: (id) => {
            dispatch(toggleTodo(id));
        },
        onRemoveTodo: ()=> {
            dispatch(removeTodo(id));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)