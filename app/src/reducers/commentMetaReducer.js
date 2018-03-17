import Immutable from 'seamless-immutable';

import * as actionTypes from '../actions/types';

export default function (state = Immutable({}), action) {
  switch (action.type) {
    case actionTypes.repliesLoaded: {
      const { commentId, comments } = action.payload;
      let commentMeta = state[commentId];
      if (commentMeta) {
        return state.setIn([commentId, 'children'], comments.map(c => c.id));
      }

      commentMeta = createMeta();
      commentMeta.children = comments.map(c => c.id);

      return state.merge({ [commentId]: commentMeta });
    }

    case actionTypes.toggleExpandReplies: {
      const commentId = action.payload;
      let commentMeta = state[commentId];
      if (commentMeta) {
        return state.setIn([commentId, 'expanded'], !commentMeta.expanded);
      }

      commentMeta = createMeta();
      commentMeta.expanded = true;

      return state.merge({[commentId]: commentMeta});
    }

    default:
      return state;
  }
}

function createMeta() {
  return {
    expanded: false,
    children: []
  };
}
