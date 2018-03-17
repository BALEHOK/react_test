import { combineReducers } from 'redux';
import articleReducer from './articleReducer';
import articleMetaReducer from './articleMetaReducer';
import commentReducer from './commentReducer';
import selectedArticleReducer from './selectedArticleReducer';

export default combineReducers({
  articles: articleReducer,
  articlesMeta: articleMetaReducer,
  comments: commentReducer,
  selectedArticleId: selectedArticleReducer,
});
