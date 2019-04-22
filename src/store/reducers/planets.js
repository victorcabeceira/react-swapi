import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  planets: { count: 0, results: [] },
  loading: false,
};

const fetchPlanetsStart = (state, action) => {
  return updateObject(state, { loading: true });
}

const fetchPlanetsSuccess = (state, action) => {
  return updateObject(state, { planets: action.planets, loading: false });
}

const fetchPlanetsFail = (state, action) => {
  return updateObject(state, { loading: false, error: action.error });
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PLANETS_START: return fetchPlanetsStart(state, action);
    case actionTypes.FETCH_PLANETS_SUCCESS: return fetchPlanetsSuccess(state, action);
    case actionTypes.FETCH_PLANETS_FAIL: return fetchPlanetsFail(state, action);
    default:
      return state;
  }
}

export default reducer;