import axios from '../../axios-swapi';
import { put } from 'redux-saga/effects';

import * as actions from '../actions';

export function* fetchVehiclesSaga(action) {
  yield put(actions.fetchVehiclesStart());
  let queryParams = action.page > 0 ? ('?page=' + action.page) : '';

  try {
    const response = yield axios.get('/vehicles/' + queryParams);
    const fetchedVehicles = { count: 0, results: [], next: '', page: 1 };

    for (const vehicle in response.data.results) {
      const vehicleWithRandomImgNumber = {
        ...response.data.results[vehicle],
        randomImgNumber: Math.floor(Math.random() * 6),
      }
      fetchedVehicles.results.push(vehicleWithRandomImgNumber);
    }
    fetchedVehicles.count = response.data.count;
    fetchedVehicles.next = response.data.next;
    fetchedVehicles.page = action.page;

    yield put(actions.fetchVehiclesSuccess(fetchedVehicles));
  } catch (error) {
    yield put(actions.fetchVehiclesFail(error));
  }
}