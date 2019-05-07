import * as actionTypes from './actionTypes';

export const fetchPeople = (id) => {
  return {
    type: actionTypes.FETCH_PEOPLE,
    id
  }
}

export const fetchPeopleStart = () => {
  return {
    type: actionTypes.FETCH_PEOPLE_START,
  }
}

export const fetchPeopleSuccess = (people) => {
  return {
    type: actionTypes.FETCH_PEOPLE_SUCCESS,
    people
  }
}

export const fetchPeopleFail = (error) => {
  return {
    type: actionTypes.FETCH_PEOPLE_FAIL,
    error
  }
}
