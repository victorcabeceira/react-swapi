import * as actionTypes from './actionTypes';

export const fetchFilms = (page) => {
  return {
    type: actionTypes.FETCH_FILMS,
    page
  }
}

export const fetchFilmsStart = () => {
  return {
    type: actionTypes.FETCH_FILMS_START,
  }
}

export const fetchFilmsSuccess = (films) => {
  return {
    type: actionTypes.FETCH_FILMS_SUCCESS,
    films
  }
}

export const fetchFilmsFail = (error) => {
  return {
    type: actionTypes.FETCH_FILMS_FAIL,
    error
  }
}
