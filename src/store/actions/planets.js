import * as actionTypes from './actionTypes';

export const fetchPlanets = (page) => {
  return {
    type: actionTypes.FETCH_PLANETS,
    page
  }
}

export const fetchPlanetsInit = () => {
  return {
    type: actionTypes.FETCH_PLANETS_INIT
  }
}

export const fetchPlanetsStart = () => {
  return {
    type: actionTypes.FETCH_PLANETS_START,
  }
}

export const fetchPlanetsSuccess = (planets) => {
  return {
    type: actionTypes.FETCH_PLANETS_SUCCESS,
    planets
  }
}

export const fetchPlanetsFail = (error) => {
  return {
    type: actionTypes.FETCH_PLANETS_FAIL,
    error
  }
}
