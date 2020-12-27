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

export const getData = () => ({
  type: types.GET_DATA,
});

export const updateGameInfo = (info) => ({
  type: types.UPDATE_GAME_INFO,
  payload: info
});

export const updateSearchResults = (results) => ({
  type: types.SEARCH_RESULTS,
  payload: results
});

export const updateSearchQuery = (query) => ({
  type: types.UPDATE_SEARCH_QUERY,
  payload: query
});

export const updateHideSearch = (bool) => ({
  type: types.HIDE_SEARCH,
  payload: bool
});