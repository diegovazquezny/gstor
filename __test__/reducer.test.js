import { types, initialState, reducer } from '../client/reducers/reducer';

describe('intial state', () => {
  it('should return the initial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });
});

describe('navigation reducers', () => {
  it('should handle FIRST_PAGE', () => {
    expect(reducer(initialState, { type: types.FIRST_PAGE }))
      .toEqual({ ...initialState, page: 1 });

    expect(reducer({ ...initialState, page: 10 }, { type: types.FIRST_PAGE }))
      .toEqual({ ...initialState, page: 1 });
   });

   it('should handle PREV_PAGE', () => {
    expect(reducer({...initialState, page: 10}, { type: types.PREV_PAGE }))
      .toEqual({ ...initialState, page: 9 });

    expect(reducer({ ...initialState, page: 1 }, { type: types.PREV_PAGE }))
      .toEqual({ ...initialState, page: 1 });
   });

   it('should handle NEXT_PAGE', () => {
    expect(reducer({...initialState, page: 10}, { type: types.NEXT_PAGE }))
      .toEqual({ ...initialState, page: 11 });

    expect(reducer({ ...initialState, total: 15, page: 15 }, { type: types.NEXT_PAGE }))
      .toEqual({ ...initialState, total: 15, page: 15 });
   });

   it('should handle LAST_PAGE', () => {
    expect(reducer({...initialState, total: 20}, { type: types.LAST_PAGE }))
      .toEqual({ ...initialState, total: 20, page: 20 });
   });
});

describe('ui state reducers', () => {
  it('should handle GET_DATA', () => {
    expect(reducer(initialState, { type: types.GET_DATA }))
      .toEqual({...initialState, loaded: true});
  }); 

  it('should handle UPDATE_GAME_INFO', () => {
    expect(reducer(
      initialState, 
      { 
        type: types.UPDATE_GAME_INFO,
        payload: {name:'Warcraft'}
      }))
      .toEqual({
        ...initialState, 
        gameInfo: {name:'Warcraft'}
      });
  }); 
});

describe('search reducers', () => {
  it('should handle SEARCH_RESULTS', () => {
    expect(reducer(
      initialState, 
      { 
        type: types.SEARCH_RESULTS,
        payload: [{name:'Warcraft'}]
      }))
      .toEqual({
        ...initialState, 
        searchResults: [{name:'Warcraft'}]
      });
  }); 

  it('should handle UPDATE_SEARCH_QUERY', () => {
    expect(reducer(
      initialState, 
      { 
        type: types.UPDATE_SEARCH_QUERY,
        payload: 'Warcraft'
      }))
      .toEqual({
        ...initialState, 
        searchQuery: 'Warcraft'
      });
  });

  it('should handle HIDE_SEARCH', () => {
    expect(reducer(
      initialState, 
      { 
        type: types.HIDE_SEARCH,
        payload: true
      }))
      .toEqual({
        ...initialState, 
        hideSearch: true
      });
  });
});