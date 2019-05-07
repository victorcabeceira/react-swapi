import axios from '../../axios-swapi';
import { put } from 'redux-saga/effects';

import * as actions from '../actions';

export function* fetchFilmSaga(action) {
  yield put(actions.fetchFilmStart());

  try {
    const response = yield axios.get('/films/' + action.id);
    const fetchedFilm = response.data

    yield put(actions.fetchFilmSuccess(fetchedFilm));
  } catch (error) {
    yield put(actions.fetchFilmFail(error));
  }
}
