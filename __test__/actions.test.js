import * as actions from '../client/actions/actions';
import { types } from '../client/reducers/reducer';

describe('navigation actions', () => {
  it('should create an action to navigate to first page', () => {
    const expectedAction = {
      type: types.FIRST_PAGE,
    }
    expect(actions.firstPage()).toEqual(expectedAction)
  });

  it('should create an action to navigate to previous page', () => {
    const expectedAction = {
      type: types.PREV_PAGE,
    }
    expect(actions.prevPage()).toEqual(expectedAction)
  });

  it('should create an action to navigate to next page', () => {
    const expectedAction = {
      type: types.NEXT_PAGE,
    }
    expect(actions.nextPage()).toEqual(expectedAction)
  });

  it('should create an action to navigate to last page', () => {
    const expectedAction = {
      type: types.LAST_PAGE,
    }
    expect(actions.lastPage()).toEqual(expectedAction)
  });
});

describe('ui state actions', () => {
  it('should create an action to alert app data is loaded', () => {
    const expectedAction = {
      type: types.GET_DATA,
    }
    expect(actions.getData()).toEqual(expectedAction)
  });

  it('should create an action to update detailed game information', () => {
    const gameInfo = {name: 'Warcraft'};
    const expectedAction = {
      type: types.UPDATE_GAME_INFO,
      payload: gameInfo
    }
    expect(actions.updateGameInfo(gameInfo)).toEqual(expectedAction)
  });
});

describe('search actions', () => {
  it('should create an action to store search results', () => {
    const results = {name: 'Warcraft'};
    const expectedAction = {
      type: types.SEARCH_RESULTS,
      payload: results
    }
    expect(actions.updateSearchResults(results)).toEqual(expectedAction)
  });

  it('should create an action to update search query', () => {
    const query = 'Warcraft';
    const expectedAction = {
      type: types.UPDATE_SEARCH_QUERY,
      payload: query
    }
    expect(actions.updateSearchQuery(query)).toEqual(expectedAction)
  });

  it('should create an action to hide search results', () => {
    const bool = true;
    const expectedAction = {
      type: types.HIDE_SEARCH,
      payload: bool
    }
    expect(actions.updateHideSearch(bool)).toEqual(expectedAction)
  });
});