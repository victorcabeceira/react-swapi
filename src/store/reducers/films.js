import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  films: { count: 0, results: [], next: '', page: 1 },
  loading: false,
};

const fetchFilmsStart = (state, _) => {
  return updateObject(state, { loading: true });
}

const fetchFilmsSuccess = (state, action) => {
  return updateObject(state, { films: action.films, loading: false });
}

const fetchFilmsFail = (state, action) => {
  return updateObject(state, { loading: false, error: action.error });
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_FILMS_START: return fetchFilmsStart(state, action);
    case actionTypes.FETCH_FILMS_SUCCESS: return fetchFilmsSuccess(state, action);
    case actionTypes.FETCH_FILMS_FAIL: return fetchFilmsFail(state, action);
    default:
      return state;
  }
}

export default reducer;