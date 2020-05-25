import {
  put, select, takeLeading, debounce,
} from 'redux-saga/effects';
import find from 'lodash/find';

import { fetchRepos } from '../actions';

import { SET_REPOS } from '../constants/repos';

import {
  SEARCH_TERM,
} from '../constants/search';

function* checkSavedRepos({ term }) {
  if (term === '') return;
  const { searchState } = yield select();
  const result = find(searchState.results, { term });
  const { reposState } = yield select();

  if (result) {
    const numberOfPages = Math.floor(result.items.length / reposState.reposPerPage)
      + (result.items.length % reposState.reposPerPage === 0 ? 0 : 1);
    yield put({ type: SET_REPOS, items: result.items, numberOfPages });
  } else {
    yield put(fetchRepos(term));
  }
}

export const searchSagas = [
  debounce(500, SEARCH_TERM, checkSavedRepos),
];
