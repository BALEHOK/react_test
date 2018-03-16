import { combineReducers } from 'redux';
import articleReducer from './articleReducer';
import selectedArticleReducer from './selectedArticleReducer';

export default combineReducers({
  articles: articleReducer,
  selectedArticleId: selectedArticleReducer,
});
