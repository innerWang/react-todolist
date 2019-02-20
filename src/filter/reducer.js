/**
 * filter用到的state仅有filterType
 * reducer的操作是根据dispatch的action设置state
 */

import {SET_FILTER} from './actionTypes.js';
import {FilterTypes} from '../constants.js'

export default (state = FilterTypes.ALL, action) => {
  switch(action.type) {
    case SET_FILTER: {
      return action.filter;
    }
    default:
      return state;
  }
}

