import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  starships: { count: 0, results: [], next: '', page: 1 },
  loading: false,
};

const fetchStarshipsStart = (state, _) => {
  return updateObject(state, { loading: true });
}

const fetchStarshipsSuccess = (state, action) => {
  return updateObject(state, { starships: action.starships, loading: false });
}

const fetchStarshipsFail = (state, action) => {
  return updateObject(state, { loading: false, error: action.error });
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_STARSHIPS_START: return fetchStarshipsStart(state, action);
    case actionTypes.FETCH_STARSHIPS_SUCCESS: return fetchStarshipsSuccess(state, action);
    case actionTypes.FETCH_STARSHIPS_FAIL: return fetchStarshipsFail(state, action);
    default:
      return state;
  }
}

export default reducer;