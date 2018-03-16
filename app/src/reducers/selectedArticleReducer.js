import * as actionTypes from '../actions/types';

export default function (state = null, action) {
  if (action.type !== actionTypes.articleSelected) {
    return state;
  }

  return action.payload.id;
}
