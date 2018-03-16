import Immutable from 'seamless-immutable';

import * as actionTypes from '../actions/types';

export default function (state = Immutable({}), action) {
  switch (action.type) {
    case actionTypes.commentsLoaded:
      const comments = action.payload;
      if (!comments.length) {
        return state;
      }

      const articleId = comments[0].articleId;
      const articleComments = {
        orderedChildren: [],
        expanded: false
      };
      comments.forEach(c => {
        articleComments.orderedChildren.push(c.id);
        articleComments[c.id] = c;
      });

      return Immutable.merge(state, { [articleId]: articleComments });

    default:
      return state;
  }
}
