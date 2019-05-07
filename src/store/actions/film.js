import * as actionTypes from './actionTypes';

export const fetchFilm = (id) => {
  return {
    type: actionTypes.FETCH_FILM,
    id
  }
}

export const fetchFilmStart = () => {
  return {
    type: actionTypes.FETCH_FILM_START,
  }
}

export const fetchFilmSuccess = (film) => {
  return {
    type: actionTypes.FETCH_FILM_SUCCESS,
    film
  }
}

export const fetchFilmFail = (error) => {
  return {
    type: actionTypes.FETCH_FILM_FAIL,
    error
  }
}
