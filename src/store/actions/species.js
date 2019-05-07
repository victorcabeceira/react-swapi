import * as actionTypes from './actionTypes';

export const fetchSpecies = (page) => {
  return {
    type: actionTypes.FETCH_SPECIES,
    page
  }
}

export const fetchSpeciesStart = () => {
  return {
    type: actionTypes.FETCH_SPECIES_START,
  }
}

export const fetchSpeciesSuccess = (species) => {
  return {
    type: actionTypes.FETCH_SPECIES_SUCCESS,
    species
  }
}

export const fetchSpeciesFail = (error) => {
  return {
    type: actionTypes.FETCH_SPECIES_FAIL,
    error
  }
}
