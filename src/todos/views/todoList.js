import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import TodoItem from './todoItem.js';
import {toggleTodo, removeTodo} from '../actions.js';
import {FilterTypes} from '../../constants.js';


//对于动态数量的子组件，每个子组件需要带上可标示这个子组件的key属性，其值唯一
const TodoList = (props)=>{
  return (
    <ul className="todo-list">
    {
      props.todos.map((item)=>(
        <TodoItem
          key={item.id}
          text={item.text}
          completed={item.completed}
          onToggle={() => props.onToggleTodo(item.id)}
          onRemove={() => props.onRemoveTodo(item.id)}
        />
      ))
    }
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};


//根据filterType返回对应的todos
const selectTodos = (todos,filterType)=>{
  switch(filterType){
    case FilterTypes.ALL:
      return todos;
    case FilterTypes.COMPLETED:
      return todos.filter(item=>item.completed);
    case FilterTypes.UNCOMPLETED:
      return todos.filter(item=> !item.completed);
    default:
      throw new Error('unsupported filter');
  }
}


//取出state中要使用的todos作为props.todos
const mapStateToProps = (state)=>{
  return {
    todos:selectTodos(state.todos,state.filter)
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    onToggleTodo: (id)=>{
      dispatch(toggleTodo(id));
    },
    onRemoveTodo: (id)=>{
      dispatch(removeTodo(id));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);