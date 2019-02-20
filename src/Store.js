/** 
 * -----store状态树-----
 * {
 *  todos:[
 *    {
 *      text:'aaa',
 *      completed: false,
 *      id:0
 *    },
 *    {
 *      text:'bbb',
 *      completed: true,
 *      id:1
 *    }
 *  ],
 *  filter:'全部'
 * }
*/

import {createStore, combineReducers} from 'redux';

import {reducer as todoReducer} from './todos';
import {reducer as filterReducer} from './filter';

const reducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer
});

export default createStore(reducer);

