  import {
    AUTHENTICATE_USER,
    LOGIN_ERRORS
  } from '../actions/session_actions';

  import merge from 'lodash/merge';
  const _nullUser = Object.freeze({
    id: null
  });

  
  const sessionReducer = (oldState = _nullUser, action) => {
    Object.freeze(oldState);
    switch(action.type) {
      case AUTHENTICATE_USER:
        return { id: action.currentUser.id };

        // return merge({}, oldState, {[action.currentUser.id]: action.currentUser.id});
      case LOGIN_ERRORS:
      console.log("erros " +action.errors);
      return { errors: action.errors};
      default:
        return oldState;
    }
  };
  
  export default sessionReducer;