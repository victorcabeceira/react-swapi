import * as actionTypes from './actionTypes';

export const fetchVehicle = (id) => {
  return {
    type: actionTypes.FETCH_VEHICLE,
    id
  }
}

export const fetchVehicleStart = () => {
  return {
    type: actionTypes.FETCH_VEHICLE_START,
  }
}

export const fetchVehicleSuccess = (vehicle) => {
  return {
    type: actionTypes.FETCH_VEHICLE_SUCCESS,
    vehicle
  }
}

export const fetchVehicleFail = (error) => {
  return {
    type: actionTypes.FETCH_VEHICLE_FAIL,
    error
  }
}
