import Immutable from 'seamless-immutable';

import * as actionTypes from '../actions/types';

export default function (state = Immutable({}), action) {
  switch (action.type) {
    case actionTypes.articlesLoaded:
      const metaMap = {};
      action.payload.data.forEach(article => {
        metaMap[article.id] = createMeta(article.commentsCount)
      })
      return state.merge(metaMap);

    case actionTypes.commentsLoaded: {
      const { articleId, comments } = action.payload;
      return state.setIn([articleId, 'children'], comments.map(c => c.id));
    }

    case actionTypes.commentAdded: {
      const { id, parentCommentId, articleId } = action.payload;

      const meta = state[articleId];
      let children;
      if (typeof parentCommentId === 'number') {
        children = meta.children;
      } else {
        children = meta.children.concat([id]);
      }

      const newMeta = createMeta(meta.commentsCount + 1, children);

      return state.merge({ [articleId]: newMeta });
    }

    default:
      return state;
  }
}

function createMeta(commentsCount, children = []) {
  return Immutable({
    expanded: true,
    children,
    commentsCount
  });
}
