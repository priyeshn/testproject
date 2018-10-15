import * as API from '../API/task_category_api'

export const RECEIVE_CATEGORY_LIST  = 'RECEIVE_CATEGORY_LIST';
export const RECEIVE_CATEGORY_ERROR = 'RECEIVE_CATEGORY_ERROR';


  export const receiveTaskCategory = (categories) => ({
    type: RECEIVE_CATEGORY_LIST,
    categories
  })


  export const receiveErrors = errors => ({
    type: RECEIVE_CATEGORY_ERROR  ,
    errors
  })


  export const getTaskCategories = () => dispatch => (
    API.getTaskCategories().then(categories => (
      dispatch(receiveTaskCategory(categories))
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
  );
