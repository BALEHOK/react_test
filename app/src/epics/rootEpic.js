import './observable';

import { combineEpics } from 'redux-observable';
import articleEpics from './articleEpics';

export default combineEpics(
  articleEpics,
);
