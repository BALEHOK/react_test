import './observable';

import { combineEpics } from 'redux-observable';
import articleEpics from './articleEpics';
import commentEpics from './commentEpics';

export default combineEpics(
  articleEpics,
  commentEpics,
);
