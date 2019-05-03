import axios from '../../axios-swapi';
import { put } from 'redux-saga/effects';

import * as actions from '../actions';

export function* fetchStarshipSaga(action) {
  yield put(actions.fetchStarshipStart());

  try {
    const response = yield axios.get('/starships/' + action.id);

    const fetchedStarship = {
      ...response.data,
      randomImgNumber: Math.floor(Math.random() * 6),
    }

    yield put(actions.fetchStarshipSuccess(fetchedStarship));
  } catch (error) {
    yield put(actions.fetchStarshipFail(error));
  }
}