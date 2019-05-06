import axios from '../../axios-swapi';
import { put } from 'redux-saga/effects';

import * as actions from '../actions';

export function* fetchVehicleSaga(action) {
  yield put(actions.fetchVehicleStart());

  try {
    const response = yield axios.get('/vehicles/' + action.id);

    const fetchedVehicle = {
      ...response.data,
      randomImgNumber: Math.floor(Math.random() * 4),
    }

    yield put(actions.fetchVehicleSuccess(fetchedVehicle));
  } catch (error) {
    yield put(actions.fetchVehicleFail(error));
  }
}