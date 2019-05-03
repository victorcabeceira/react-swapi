import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  starship: {},
  loading: false,
};

const fetchStarshipStart = (state, _) => {
  return updateObject(state, { loading: true });
}

const fetchStarshipSuccess = (state, action) => {
  return updateObject(state, { starship: action.starship, loading: false });
}

const fetchStarshipFail = (state, action) => {
  return updateObject(state, { loading: false, error: action.error });
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_STARSHIP_START: return fetchStarshipStart(state, action);
    case actionTypes.FETCH_STARSHIP_SUCCESS: return fetchStarshipSuccess(state, action);
    case actionTypes.FETCH_STARSHIP_FAIL: return fetchStarshipFail(state, action);
    default:
      return state;
  }
}

export default reducer;