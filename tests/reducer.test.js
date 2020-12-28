import { types, initialState, reducer } from '../client/reducers/reducer';

describe('reducer tests', () => {
  it('should return the initial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState)
  })

  it('should handle FIRST_PAGE', () => {
    expect(
      reducer(initialState, {
        type: types.FIRST_PAGE,
      })
    ).toEqual({
      ...initialState,
      page: 1
    });

    expect(
      reducer({
        ...initialState,
        page: 10
      },
        {
          type: types.FIRST_PAGE,
        }
      )
    ).toEqual({
      ...initialState,
      page: 1
    });
   });
});