import axios from '../../axios-swapi';
import { put } from 'redux-saga/effects';

import * as actions from '../actions';

export function* fetchSpeciesSaga(action) {
  yield put(actions.fetchSpeciesStart());
  let queryParams = action.page > 0 ? ('?page=' + action.page) : '';

  try {
    const response = yield axios.get('/species/' + queryParams);
    const fetchedSpecies = { count: 0, results: [], next: '', page: 1 };

    for (const species in response.data.results) {
      const speciesWithRandomImgNumber = {
        ...response.data.results[species],
        randomImgNumber: Math.floor(Math.random() * 4),
      }
      fetchedSpecies.results.push(speciesWithRandomImgNumber);
    }
    fetchedSpecies.count = response.data.count;
    fetchedSpecies.next = response.data.next;
    fetchedSpecies.page = action.page;

    yield put(actions.fetchSpeciesSuccess(fetchedSpecies));
  } catch (error) {
    yield put(actions.fetchSpeciesFail(error));
  }
}