import {
  SEARCH_TERM,
  SAVE_RESULTS,
} from '../constants/search';

const initialState = {
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_RESULTS: {
      const { term, items } = action;
      const result = {
        term,
        items,
      };
      const results = [
        ...state.results,
        result,
      ];
      return {
        ...state,
        results,
      };
    }
    default:
      return state;
  }
};

export default reducer;
