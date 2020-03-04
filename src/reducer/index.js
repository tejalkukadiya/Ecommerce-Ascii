import { combineReducers } from 'redux';
import productReducer from './produtReducer';
export default combineReducers({
 products:productReducer
});