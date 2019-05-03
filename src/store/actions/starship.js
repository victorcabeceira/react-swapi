import * as actionTypes from './actionTypes';

export const fetchStarship = (id) => {
  return {
    type: actionTypes.FETCH_STARSHIP,
    id
  }
}

export const fetchStarshipStart = () => {
  return {
    type: actionTypes.FETCH_STARSHIP_START,
  }
}

export const fetchStarshipSuccess = (starship) => {
  return {
    type: actionTypes.FETCH_STARSHIP_SUCCESS,
    starship
  }
}

export const fetchStarshipFail = (error) => {
  return {
    type: actionTypes.FETCH_STARSHIP_FAIL,
    error
  }
}
