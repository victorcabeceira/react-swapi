import * as actionTypes from './actionTypes';

export const fetchPlanet = (id) => {
  return {
    type: actionTypes.FETCH_PLANET,
    id
  }
}

export const fetchPlanetStart = () => {
  return {
    type: actionTypes.FETCH_PLANET_START,
  }
}

export const fetchPlanetSuccess = (planet) => {
  return {
    type: actionTypes.FETCH_PLANET_SUCCESS,
    planet
  }
}

export const fetchPlanetFail = (error) => {
  return {
    type: actionTypes.FETCH_PLANET_FAIL,
    error
  }
}
