import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  vehicle: {},
  loading: false,
};

const fetchVehicleStart = (state, _) => {
  return updateObject(state, { loading: true });
}

const fetchVehicleSuccess = (state, action) => {
  return updateObject(state, { vehicle: action.vehicle, loading: false });
}

const fetchVehicleFail = (state, action) => {
  return updateObject(state, { loading: false, error: action.error });
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_VEHICLE_START: return fetchVehicleStart(state, action);
    case actionTypes.FETCH_VEHICLE_SUCCESS: return fetchVehicleSuccess(state, action);
    case actionTypes.FETCH_VEHICLE_FAIL: return fetchVehicleFail(state, action);
    default:
      return state;
  }
}

export default reducer;