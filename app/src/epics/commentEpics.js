import { Subject } from 'rxjs/Subject';
import { combineEpics } from 'redux-observable';

import * as actionTypes from '../actions/types';
import * as actionCreators from '../actions/creators';

import commentService from '../services/commentService';

const loadArticleCommentsEpic = (action$, store) =>
  action$.ofType(actionTypes.articleSelected)
    .map(action => action.payload)
    .filter(article => article.commentsCount !== 0)
    .mergeMap(article => loadArticleComments(article.id));

const loadRepliesEpic = (action$, store) =>
  action$.ofType(actionTypes.loadReplies)
    .map(action => action.payload)
    .mergeMap(comment => loadCommentReplies(comment.id));

const addCommentEpic = (action$) =>
  action$.ofType(actionTypes.addComment)
    .map(action => action.payload)
    .mergeMap(({ articleId, commentId, text }) => {
      const subject = new Subject();
      commentService.addComment(articleId, commentId, text)
        .then(async result => {
          const newComment = result.data;
          subject.next(actionCreators.commentAdded(newComment));

          const childrenAction = await (typeof newComment.parentCommentId === 'number'
            ? loadCommentReplies(newComment.parentCommentId)
            : loadArticleComments(newComment.articleId));

          subject.next(childrenAction);
          subject.complete();
        });

      return subject.asObservable();
    });

async function loadArticleComments(articleId) {
  const result = await commentService.loadCommentsForArticle(articleId);
  return actionCreators.commentsLoaded(articleId, result.data);
}

async function loadCommentReplies(commentId) {
  const result = await commentService.loadRepliesForComment(commentId);
  return actionCreators.repliesLoaded(commentId, result.data);
}

export default combineEpics(
  loadArticleCommentsEpic,
  loadRepliesEpic,
  addCommentEpic,
);
