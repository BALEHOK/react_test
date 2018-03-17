import * as actionTypes from './types';

export const loadArticles = () => ({
  type: actionTypes.loadArticles
});

export const articlesLoaded = (data) => ({
  type: actionTypes.articlesLoaded,
  payload: data
});

export const articleSelected = (article) => ({
  type: actionTypes.articleSelected,
  payload: article
});

export const loadComments = () => ({
  type: actionTypes.loadComments
});

export const commentsLoaded = (articleId, comments) => ({
  type: actionTypes.commentsLoaded,
  payload: { articleId, comments }
});

export const loadReplies = (parentComment) => ({
  type: actionTypes.loadReplies,
  payload: parentComment
});

export const repliesLoaded = (commentId, comments) => ({
  type: actionTypes.repliesLoaded,
  payload: { commentId, comments }
});
