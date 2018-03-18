import { combineEpics } from 'redux-observable';

import * as actionTypes from '../actions/types';
import * as actionCreators from '../actions/creators';

import commentService from '../services/commentService';

const loadArticleCommentsEpic = (action$, store) =>
  action$.ofType(actionTypes.articleSelected)
    .map(action => action.payload)
    .filter(article => article.commentsCount !== 0)
    .mergeMap(async article => {
      const result = await commentService.loadCommentsForArticle(article.id);
      return actionCreators.commentsLoaded(article.id, result.data)
    });

const loadRepliesEpic = (action$, store) =>
  action$.ofType(actionTypes.loadReplies)
    .map(action => action.payload)
    .mergeMap(async comment => {
      const result = await commentService.loadRepliesForComment(comment.id);
      return actionCreators.repliesLoaded(comment.id, result.data);
    });

const addCommentEpic = (action$) =>
  action$.ofType(actionTypes.addComment)
    .map(action => action.payload)
    .mergeMap(async ({ articleId, commentId, text }) => {
      const result = await commentService.addComment(articleId, commentId, text);

      return actionCreators.commentAdded(result.data);
    })

export default combineEpics(
  loadArticleCommentsEpic,
  loadRepliesEpic,
  addCommentEpic,
);
