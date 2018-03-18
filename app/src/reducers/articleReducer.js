import Immutable from 'seamless-immutable';

import * as actionTypes from '../actions/types';

export default function (state = Immutable({}), action) {
  switch (action.type) {
    case actionTypes.articlesLoaded:
      const articlesMap = {};
      action.payload.data.forEach(article => articlesMap[article.id] = article);
      return state.merge(articlesMap);

    default:
      return state;
  }
}
