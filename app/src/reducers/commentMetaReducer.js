import Immutable from 'seamless-immutable';

import * as actionTypes from '../actions/types';

export default function (state = Immutable({}), action) {
  switch (action.type) {
    case actionTypes.commentsLoaded:
      return state.merge(createCommentsMap(state, action.payload.comments));

    case actionTypes.repliesLoaded: {
      const { commentId, comments } = action.payload;
      state = state.merge(createCommentsMap(state, comments));
      return state.setIn([commentId, 'children'], comments.map(c => c.id));
    }

    case actionTypes.toggleExpandReplies: {
      const commentId = action.payload;
      return state.updateIn([commentId, 'expanded'], expanded => !expanded);
    }

    case actionTypes.commentAdded:
      const { id, parentCommentId } = action.payload;
      const metaMap = createCommentsMap(state, [action.payload]);

      if (typeof parentCommentId === 'number') {
        // this is a reply to other comment
        const meta = state[parentCommentId];
        const newMeta = createMeta(meta.commentsCount + 1, meta.children.concat([id]), true);

        metaMap[parentCommentId] = newMeta;
      }

      return state.merge(metaMap);

    default:
      return state;
  }
}

function createCommentsMap(state, comments) {
  const metaMap = {};
  comments.forEach(comment => {
    const id = comment.id;
    const meta = state[id];
    const children = (meta && meta.children) || [];
    const expanded = meta && meta.expanded;
    metaMap[id] = createMeta(comment.repliesCount, children, expanded)
  });

  return metaMap;
}

function createMeta(commentsCount = 0, children = [], expanded = false) {
  return Immutable({
    expanded,
    children,
    commentsCount
  });
}
