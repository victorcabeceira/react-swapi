import * as actionTypes from './actionTypes';

export const fetchVehicles = (page) => {
  return {
    type: actionTypes.FETCH_VEHICLES,
    page
  }
}

export const fetchVehiclesStart = () => {
  return {
    type: actionTypes.FETCH_VEHICLES_START,
  }
}

export const fetchVehiclesSuccess = (vehicles) => {
  return {
    type: actionTypes.FETCH_VEHICLES_SUCCESS,
    vehicles
  }
}

export const fetchVehiclesFail = (error) => {
  return {
    type: actionTypes.FETCH_VEHICLES_FAIL,
    error
  }
}
