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

export const commentsLoaded = (data) => ({
  type: actionTypes.commentsLoaded,
  payload: data
});

export const loadReplies = (comment) => ({
  type: actionTypes.loadReplies,
  payload: comment
});

export const repliesLoaded = (data) => ({
  type: actionTypes.repliesLoaded,
  payload: data
});
