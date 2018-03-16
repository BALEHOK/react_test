import { combineEpics } from 'redux-observable';

import * as actionTypes from '../actions/types';
import * as actionCreators from '../actions/creators';

import articleService from '../services/articleService';

const loadArticlesEpic = (action$, store) =>
  action$.ofType(actionTypes.loadArticles)
    .mergeMap(() => articleService.loadArticles())
    .map(data => actionCreators.articlesLoaded(data));

export default combineEpics(
  loadArticlesEpic
);
