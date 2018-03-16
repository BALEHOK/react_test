import Immutable from 'seamless-immutable';

import * as actionTypes from '../actions/types';

export default function (state = Immutable([]), action) {
  if (action.type !== actionTypes.articlesLoaded) {
    return state;
  }

  return state.concat(action.payload.data);
}
