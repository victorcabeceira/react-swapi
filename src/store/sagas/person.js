import axios from '../../axios-swapi';
import { put } from 'redux-saga/effects';

import * as actions from '../actions';

export function* fetchPersonSaga(action) {
  yield put(actions.fetchPersonStart());

  try {
    const response = yield axios.get('/people/' + action.id);
    const fetchedPerson = {
      ...response.data,
      randomImgNumber: Math.floor(Math.random() * 11)
    };

    yield put(actions.fetchPersonSuccess(fetchedPerson));
  } catch (error) {
    yield put(actions.fetchPersonFail(error));
  }
}
