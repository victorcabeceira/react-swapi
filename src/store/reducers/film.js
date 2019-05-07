import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  film: { },
  loading: false,
};

const fetchFilmStart = (state, _) => {
  return updateObject(state, { loading: true });
}

const fetchFilmSuccess = (state, action) => {
  return updateObject(state, { film: action.film, loading: false });
}

const fetchFilmFail = (state, action) => {
  return updateObject(state, { loading: false, error: action.error });
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_FILM_START: return fetchFilmStart(state, action);
    case actionTypes.FETCH_FILM_SUCCESS: return fetchFilmSuccess(state, action);
    case actionTypes.FETCH_FILM_FAIL: return fetchFilmFail(state, action);
    default:
      return state;
  }
}

export default reducer;