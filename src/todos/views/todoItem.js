import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = (props)=>{
  return (
    <li className="todo-item" style={{textDecoration: props.completed?'line-through':'none'}}>
      <input className="toggle" type="checkbox" onClick={props.onToggle}/>
      <span className="text">{props.text}</span>
      <button className="remove" onClick={props.onRemove}>x</button>
    </li>
  )
}

TodoItem.propTypes = {
  onToggle:PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default TodoItem;