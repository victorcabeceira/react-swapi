import * as actionTypes from './actionTypes';

export const fetchSpecie = (id) => {
  return {
    type: actionTypes.FETCH_SPECIE,
    id
  }
}

export const fetchSpecieStart = () => {
  return {
    type: actionTypes.FETCH_SPECIE_START,
  }
}

export const fetchSpecieSuccess = (specie) => {
  return {
    type: actionTypes.FETCH_SPECIE_SUCCESS,
    specie
  }
}

export const fetchSpecieFail = (error) => {
  return {
    type: actionTypes.FETCH_SPECIE_FAIL,
    error
  }
}
