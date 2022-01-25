import { combineReducers } from 'redux';
import tasksReducer from './tasksReducer';
import userReducer from './userReducer';

export const rootReducer = combineReducers({
  userReducer,
  tasksReducer,
});
