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

      commentMeta = createMeta(false, comments.map(c => c.id));

      return state.merge({ [commentId]: commentMeta });
    }

    case actionTypes.toggleExpandReplies: {
      const commentId = action.payload;
      let commentMeta = state[commentId];
      if (commentMeta) {
        return state.setIn([commentId, 'expanded'], !commentMeta.expanded);
      }

      commentMeta = createMeta(true);

      return state.merge({[commentId]: commentMeta});
    }

    case actionTypes.commentAdded:
      const {id, parentCommentId} = action.payload;
      if (typeof parentCommentId === 'undefined') {
        // this is a comment to an article, disregard
        return state;
      }

      let meta = state[parentCommentId];
      if (!meta) {
        meta = createMeta(true, [id]);
      } else {
        meta = meta.update('children', children => children.concat([id]));
        meta = meta.merge({expanded: true});
      }

      return state.merge({[parentCommentId]: meta});

    default:
      return state;
  }
}

function createMeta(expanded = false, children = []) {
  return {
    expanded,
    children
  };
}
