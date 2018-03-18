import Immutable from 'seamless-immutable';

import * as actionTypes from '../actions/types';

export default function (state = Immutable({}), action) {
  switch (action.type) {
    case actionTypes.commentsLoaded: {
      const { articleId, comments } = action.payload;
      const articleMeta = createMeta(true, comments.map(c => c.id));

      return state.merge({ [articleId]: articleMeta });
    }

    case actionTypes.commentAdded: {
      const { id, parentCommentId, articleId } = action.payload;
      if (typeof parentCommentId === 'number') {
        // this is a reply to a comment, disregard
        return state;
      }

      let meta = state[articleId];
      if (!meta) {
        meta = createMeta(true, [id]);
      } else {
        meta = meta.update('children', children => children.concat([id]));
      }

      return state.merge({ [articleId]: meta });
    }

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
