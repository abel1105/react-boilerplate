import { combineReducers } from 'redux';
import exampleReducer from 'store/reducers/exampleReducer';

export default combineReducers({
  example: exampleReducer,
});
