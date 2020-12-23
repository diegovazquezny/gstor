export const types = {
  UPDATE_USER_INFO: 'UPDATE_USER_INFO',
  UPDATE_TECHNOLOGIES: 'UPDATE_TECHNOLOGIES',
  DELETE_NOTE: 'DELETE_NOTE',
  ALL_CATEGORIES: 'ALL_CATEGORIES',
  MAKE_NEW_NOTE: 'MAKE_NEW_NOTE'
}

const initialState = {}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.UPDATE_USER_INFO:
      const { userData } = action.payload;  
      return {
        ...state,
        firstName: userData.firstname,
        lastName: userData.lastname,
        userName: userData.username,
        userId: userData.userId,
        email: userData.email,
        picture: userData.picture,
        authenticated: true
      };
    default:
      return state;
  }
}

export default reducer;