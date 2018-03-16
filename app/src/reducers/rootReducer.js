import { combineReducers } from 'redux';
import articleReducer from './articleReducer';
import commentReducer from './commentReducer';
import selectedArticleReducer from './selectedArticleReducer';

export default combineReducers({
  articles: articleReducer,
  comments: commentReducer,
  selectedArticleId: selectedArticleReducer,
});
