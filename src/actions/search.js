import {
  SEARCH_TERM,
  SAVE_RESULTS,
} from '../constants/search';

export const searchTerm = (term) => ({
  type: SEARCH_TERM,
  term,
});

export const saveResults = (term, items) => ({
  type: SAVE_RESULTS,
  term,
  items,
});
