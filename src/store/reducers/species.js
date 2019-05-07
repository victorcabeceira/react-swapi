import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  species: { count: 0, results: [], next: '', page: 1 },
  loading: false,
};

const fetchSpeciesStart = (state, _) => {
  return updateObject(state, { loading: true });
}

const fetchSpeciesSuccess = (state, action) => {
  return updateObject(state, { species: action.species, loading: false });
}

const fetchSpeciesFail = (state, action) => {
  return updateObject(state, { loading: false, error: action.error });
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SPECIES_START: return fetchSpeciesStart(state, action);
    case actionTypes.FETCH_SPECIES_SUCCESS: return fetchSpeciesSuccess(state, action);
    case actionTypes.FETCH_SPECIES_FAIL: return fetchSpeciesFail(state, action);
    default:
      return state;
  }
}

export default reducer;