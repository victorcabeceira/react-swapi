import axios from '../../axios-swapi';
import { put } from 'redux-saga/effects';

import * as actions from '../actions';

export function* fetchSpecieSaga(action) {
  yield put(actions.fetchSpecieStart());

  try {
    const response = yield axios.get('/species/' + action.id);

    const fetchedSpecie = {
      ...response.data,
      randomImgNumber: Math.floor(Math.random() * 4),
    }

    yield put(actions.fetchSpecieSuccess(fetchedSpecie));
  } catch (error) {
    yield put(actions.fetchSpecieFail(error));
  }
}