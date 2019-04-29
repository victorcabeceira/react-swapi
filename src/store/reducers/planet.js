import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  planet: { },
  loading: false,
};

const fetchPlanetStart = (state, _) => {
  return updateObject(state, { loading: true });
}

const fetchPlanetSuccess = (state, action) => {
  return updateObject(state, { planet: action.planet, loading: false });
}

const fetchPlanetFail = (state, action) => {
  return updateObject(state, { loading: false, error: action.error });
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PLANET_START: return fetchPlanetStart(state, action);
    case actionTypes.FETCH_PLANET_SUCCESS: return fetchPlanetSuccess(state, action);
    case actionTypes.FETCH_PLANET_FAIL: return fetchPlanetFail(state, action);
    default:
      return state;
  }
}

export default reducer;