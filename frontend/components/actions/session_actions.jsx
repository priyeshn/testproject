import * as API from '../API/session_api';

export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export const LOGIN_ERRORS = 'LOGIN_ERRORS';

    export const authenticateUser = currentUser => ({
    type: AUTHENTICATE_USER,
    currentUser
  });

  export const receiveErrors = errors => ({
    type: LOGIN_ERRORS,
    errors
  })

  export const login = user => dispatch => (
    API.login(user).then(user => (
      dispatch(authenticateUser(user))
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
  );