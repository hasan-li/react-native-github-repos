import {
  EMPTY_REPOS, FETCH_REPOS, LOADING_REPOS, ORDER_REPOS_BY, SET_NEW_PAGE, SET_REPOS, SET_REPOS_PER_PAGE,
} from '../constants/repos';

export const setRepos = (repos) => ({
  type: SET_REPOS,
  repos,
});

export const fetchRepos = (term) => ({
  type: FETCH_REPOS,
  term,
});

export const setLoadingRepos = (loading) => ({
  type: LOADING_REPOS,
  loading,
});

export const emptyRepos = () => ({
  type: EMPTY_REPOS,
});

export const setNewPage = (page) => ({
  type: SET_NEW_PAGE,
  page,
});

export const setReposPerPage = (reposPerPage) => ({
  type: SET_REPOS_PER_PAGE,
  reposPerPage,
});

export const orderColumnBy = (orderBy) => ({
  type: ORDER_REPOS_BY,
  orderBy,
});
