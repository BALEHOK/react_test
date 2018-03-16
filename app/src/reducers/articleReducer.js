import Immutable from 'seamless-immutable';

import Reducer from './baseReducer';
import * as actionTypes from '../actions/types';

class ArticleReducer extends Reducer {
  constructor() {
    super();

    this.defaultState = Immutable({
      articles: [],
      selected: null
    });

    this.actionMap = {
      [actionTypes.articlesLoaded]: 'addArticles',
      [actionTypes.articleSelected]: 'selectArticle'
    };
  }

  addArticles(state, action) {
    return Immutable.merge(state, {articles: state.articles.concat(action.payload.data)});
  }

  selectArticle(state, action) {
    return Immutable.merge(state, { selected: action.payload});
  }
}

export default new ArticleReducer().getReducerFn();
