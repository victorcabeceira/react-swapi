import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  vehicles: { count: 0, results: [], next: '', page: 1 },
  loading: false,
};

const fetchVehiclesStart = (state, _) => {
  return updateObject(state, { loading: true });
}

const fetchVehiclesSuccess = (state, action) => {
  return updateObject(state, { vehicles: action.vehicles, loading: false });
}

const fetchVehiclesFail = (state, action) => {
  return updateObject(state, { loading: false, error: action.error });
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_VEHICLES_START: return fetchVehiclesStart(state, action);
    case actionTypes.FETCH_VEHICLES_SUCCESS: return fetchVehiclesSuccess(state, action);
    case actionTypes.FETCH_VEHICLES_FAIL: return fetchVehiclesFail(state, action);
    default:
      return state;
  }
}

export default reducer;