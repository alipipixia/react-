import react from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({onToggle, onRemove, completed, text}) => {
    return (
        <li 
            className="todo-item"
            style = {{
                textDecoration: completed ? 'line-though': 'none',
            }}
        >
            <input className="toggle" type="checkbox" {...checkedProp} readonly onClick={onToggle} />
            <label className="text">{text}</label>
            <button className="remove" onClick={onRemove}>
                x
            </button>
        </li>
    )
}
TodoItem.propTypes = {
    onToggle: PropTypes.func.isRquired,
    onRemove: PropTypes.func.isRquired,
    text: PropTypes.string.isRquired,
    completed: PropTypes.bool.isRquired,
}

export default TodoItem;
