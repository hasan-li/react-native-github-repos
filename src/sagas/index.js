import { all } from 'redux-saga/effects';

import { reposSagas } from './repos';
import { searchSagas } from './search';

export default function* rootSaga() {
  yield all([
    ...reposSagas,
    ...searchSagas,
  ]);
}
