import Immutable from 'seamless-immutable';

import * as actionTypes from '../actions/types';

export default function (state = Immutable({}), action) {
  switch (action.type) {
    case actionTypes.commentsLoaded:
      const { articleId, comments } = action.payload;
      const articleMeta = {
        expanded: true,
        children: comments.map(c => c.id)
      };

      return state.merge({[articleId]: articleMeta});

    default:
      return state;
  }
}
