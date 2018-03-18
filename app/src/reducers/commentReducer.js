import Immutable from 'seamless-immutable';

import * as actionTypes from '../actions/types';

export default function (state = Immutable({}), action) {
  switch (action.type) {
    case actionTypes.commentsLoaded:
    case actionTypes.repliesLoaded:
      const { comments } = action.payload;
      if (!comments.length) {
        return state;
      }

      const commentsMap = {};

      comments.forEach(c => {
        commentsMap[c.id] = c
      });

      return state.merge(commentsMap);

    case actionTypes.commentAdded:
      const comment = action.payload;
      return state.merge({[comment.id]: comment});

    default:
      return state;
  }
}
