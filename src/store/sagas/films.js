import axios from '../../axios-swapi';
import { put } from 'redux-saga/effects';

import * as actions from '../actions';

export function* fetchFilmsSaga(action) {
  yield put(actions.fetchFilmsStart());
  let queryParams = action.page > 0 ? ('?page=' + action.page) : '';

  try {
    const response = yield axios.get('/films/' + queryParams);
    const fetchedFilms = { count: 0, results: [], next: '', page: 1 };

    for (const film in response.data.results) {
      fetchedFilms.results.push(response.data.results[film]);
    }
    fetchedFilms.count = response.data.count;
    fetchedFilms.next = response.data.next;
    fetchedFilms.page = action.page;

    yield put(actions.fetchFilmsSuccess(fetchedFilms));
  } catch (error) {
    yield put(actions.fetchFilmsFail(error));
  }
}