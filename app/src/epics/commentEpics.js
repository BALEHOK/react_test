import { combineEpics } from 'redux-observable';

import * as actionTypes from '../actions/types';
import * as actionCreators from '../actions/creators';

import commentService from '../services/commentService';

const loadArticleCommentsEpic = (action$, store) =>
  action$.ofType(actionTypes.articleSelected)
    .map(action => action.payload)
    .filter(article => article.commentsCount !== 0)
    .mergeMap(article => commentService.loadCommentsForArticle(article.id))
    .map(result => actionCreators.commentsLoaded(result.data));

export default combineEpics(
  loadArticleCommentsEpic
);
