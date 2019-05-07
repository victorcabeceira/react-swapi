import * as actionTypes from './actionTypes';

export const fetchPerson = (id) => {
  return {
    type: actionTypes.FETCH_PERSON,
    id
  }
}

export const fetchPersonStart = () => {
  return {
    type: actionTypes.FETCH_PERSON_START,
  }
}

export const fetchPersonSuccess = (person) => {
  return {
    type: actionTypes.FETCH_PERSON_SUCCESS,
    person
  }
}

export const fetchPersonFail = (error) => {
  return {
    type: actionTypes.FETCH_PERSON_FAIL,
    error
  }
}
