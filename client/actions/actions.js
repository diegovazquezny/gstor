import { types } from '../reducers/reducer';

export const firstPage = () => ({
  type: types.FIRST_PAGE,
});

export const prevPage = () => ({
  type: types.PREV_PAGE,
});

export const nextPage = () => ({
  type: types.NEXT_PAGE,
});

export const lastPage = () => ({
  type: types.LAST_PAGE,
});

export const totalPages = (totalGames) => ({
  type: types.TOTAL_PAGES,
  payload: totalGames
});