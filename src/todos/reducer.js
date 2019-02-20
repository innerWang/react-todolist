/**
 * todos用到的state为很多个todo的对象，包含有text,id,completed属性
 * reducer的操作是根据dispatch的action设置todos这个集合
 */

import * as ActionTypes from './actionTypes.js';

export default (state=[],action)=>{
  switch(action.type){
    case ActionTypes.ADD_TODO:{
      return [...state,{
        id: action.id,
        text: action.text,
        completed: false
      }]
    }
    case ActionTypes.TOGGLE_TODO:{
      return state.map((item)=>{
        if(item.id === action.id){
          return {...item,completed:!item.completed};
        }else{
          return item;
        }
      })
    }
    case ActionTypes.REMOVE_TODO:{
      return state.filter((item)=>{
        return item.id !== action.id;
      })
    }
    default:
      return state;
  }
}