import Immutable from 'seamless-immutable';

import * as actionTypes from '../actions/types';

export default function (state = Immutable([]), action) {
  switch (action.type) {
    case actionTypes.articlesLoaded:
      return state.concat(action.payload.data);

    default:
      return state;
  }
}
