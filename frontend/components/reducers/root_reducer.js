import { combineReducers } from 'redux';
import login from './login_reducer';
import categories from './task_category_reducer';

const rootReducer = combineReducers({
  login,
  categories
});

export default rootReducer;