import { orderBy as _orderBy } from 'lodash';
import {
  LOADING_REPOS,
  SET_REPOS,
  ERROR_FETCHING_REPOS,
  SET_NEW_PAGE,
  EMPTY_REPOS,
  SET_REPOS_PER_PAGE,
  ORDER_REPOS_BY,
} from '../constants/repos';

const initialState = {
  repos: undefined,
  loading: false,
  page: 1,
  numberOfPages: 1,
  reposPerPage: 5,
  error: false,
  errorMessage: undefined,
  orderBy: undefined,
  orderAsc: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REPOS: {
      const { items, numberOfPages } = action;
      return {
        ...state,
        repos: items,
        page: 1,
        numberOfPages,
        loading: false,
      };
    }
    case LOADING_REPOS: {
      return {
        ...state,
        loading: action.loading,
      };
    }
    case EMPTY_REPOS: {
      return {
        ...state,
        repos: [],
        page: 1,
        numberOfPages: 1,
      };
    }
    case SET_NEW_PAGE: {
      const { page } = action;
      return {
        ...state,
        page,
      };
    }
    case ORDER_REPOS_BY: {
      const { orderBy } = action;
      const { repos: initialRepos, orderAsc } = state;
      const repos = _orderBy(initialRepos, orderBy, [orderAsc ? 'desc' : 'asc']);
      return {
        ...state,
        repos,
        orderBy,
        orderAsc: !orderAsc,
      };
    }
    case SET_REPOS_PER_PAGE: {
      const { reposPerPage } = action;
      const numberOfPages = Math.floor(state.repos.length / reposPerPage)
        + (state.repos.length % reposPerPage === 0 ? 0 : 1);
      return {
        ...state,
        reposPerPage,
        numberOfPages,
      };
    }
    default:
      return state;
  }
};

export default reducer;
