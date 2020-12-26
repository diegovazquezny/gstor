export const types = {
  FIRST_PAGE: 'FIRST_PAGE',
  PREV_PAGE: 'PREV_PAGE',
  NEXT_PAGE: 'NEXT_PAGE',
  LAST_PAGE: 'LAST_PAGE',
  TOTAL_PAGES: 'TOTAL_PAGES',
  GET_DATA: 'GET_DATA',
  UPDATE_GAME_INFO: 'UPDATE_GAME_INFO'
}

const initialState = {
  page: 1,
  total: 0,
  loaded: false,
  gameInfo: {} 
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.FIRST_PAGE:
      return {
        ...state,
        page: 1
      };
    case types.PREV_PAGE:
      if (state.page === 1) return state;
      return {
        ...state,
        page: state.page - 1
      };
    case types.NEXT_PAGE:
      if (state.page === 15) return state;
      return {
        ...state,
        page: state.page + 1
      };
    case types.LAST_PAGE:
      return {
        ...state,
        page: state.total
      };
    case types.TOTAL_PAGES:
      const total = action.payload;
      return {
        ...state,
        total: Math.ceil(total / 18)
      };
    case types.GET_DATA:
      return {
        ...state,
        loaded: true 
      }
    case types.UPDATE_GAME_INFO:
      console.log('game info', action.payload);
      return {
        ...state,
        gameInfo: action.payload 
      }
    default:
      return state;
  }
}

export default reducer;