import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  specie: {},
  loading: false,
};

const fetchSpecieStart = (state, _) => {
  return updateObject(state, { loading: true });
}

const fetchSpecieSuccess = (state, action) => {
  return updateObject(state, { specie: action.specie, loading: false });
}

const fetchSpecieFail = (state, action) => {
  return updateObject(state, { loading: false, error: action.error });
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SPECIE_START: return fetchSpecieStart(state, action);
    case actionTypes.FETCH_SPECIE_SUCCESS: return fetchSpecieSuccess(state, action);
    case actionTypes.FETCH_SPECIE_FAIL: return fetchSpecieFail(state, action);
    default:
      return state;
  }
}

export default reducer;