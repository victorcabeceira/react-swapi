import * as actionTypes from './actionTypes';

export const fetchStarships = (page) => {
  return {
    type: actionTypes.FETCH_STARSHIPS,
    page
  }
}

export const fetchStarshipsStart = () => {
  return {
    type: actionTypes.FETCH_STARSHIPS_START,
  }
}

export const fetchStarshipsSuccess = (starships) => {
  return {
    type: actionTypes.FETCH_STARSHIPS_SUCCESS,
    starships
  }
}

export const fetchStarshipsFail = (error) => {
  return {
    type: actionTypes.FETCH_STARSHIPS_FAIL,
    error
  }
}
