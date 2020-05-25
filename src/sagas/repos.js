import {
  put, select, takeLeading,
} from 'redux-saga/effects';
import axios from 'axios';

import {
  LOADING_REPOS,
  ERROR_FETCHING_REPOS,
  SET_REPOS,
  FETCH_REPOS,
} from '../constants/repos';

import {
  SAVE_RESULTS
} from '../constants/search';

export function* searchRepos({ term }) {
  if (term === '') return;
  yield put({ type: LOADING_REPOS, loading: true });
  const url = `https://api.github.com/search/repositories?q=${term}`;

  const headers = {
    Accept: 'application/vnd.github.v3+json',
  };

  const res = yield axios({
    method: 'GET',
    url,
    headers,
  });

  const { reposState } = yield select();
  const { status, data: { items } } = res;
  const numberOfPages =
    Math.floor(items.length / reposState.reposPerPage)
    + (items.length % reposState.reposPerPage === 0 ? 0 : 1);

  if (status !== 200) {
    yield put({
      type: ERROR_FETCHING_REPOS,
      error: true,
      errorMessage: 'Please check internet connection! Failed while fetching articles.',
    });
    return;
  }

  if (items && items.length > 0) {
    yield put({ type: SET_REPOS, items, numberOfPages });
    yield put({ type: SAVE_RESULTS, term, items });
  }
}


export const reposSagas = [
  takeLeading(FETCH_REPOS, searchRepos),
];
