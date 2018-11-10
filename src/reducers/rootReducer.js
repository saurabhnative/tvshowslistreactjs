/**
 * Main reducer File to combine all component level reducers
 */
import { combineReducers } from 'redux';
import tvShowListReducer from './tvShowListReducer';
export default combineReducers({
 tvShowListReducer
});
