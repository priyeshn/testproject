import {
    RECEIVE_CATEGORY_LIST,
    RECEIVE_CATEGORY_ERROR
  } from '../actions/task_category_actions';
  import merge from 'lodash/merge';

  const taskCatagoryReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_CATEGORY_LIST:
            console.log("categories" +JSON.stringify(action.categories) );
            return merge({}, oldState,  action.categories );
        case RECEIVE_CATEGORY_ERROR:
            return { errors: action.errors};
        default:
          return oldState
    }

  }

  export default taskCatagoryReducer;