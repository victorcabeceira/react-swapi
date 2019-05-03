import axios from '../../axios-swapi';
import { put } from 'redux-saga/effects';

import * as actions from '../actions';

export function* fetchStarshipsSaga(action) {
  yield put(actions.fetchStarshipsStart());
  let queryParams = action.page > 0 ? ('?page=' + action.page) : '';

  try {
    const response = yield axios.get('/starships/' + queryParams);
    const fetchedStarships = { count: 0, results: [], next: '', page: 1 };

    for (const starship in response.data.results) {
      const starshipWithRandomImgNumber = {
        ...response.data.results[starship],
        randomImgNumber: Math.floor(Math.random() * 9),
      }
      fetchedStarships.results.push(starshipWithRandomImgNumber);
    }
    fetchedStarships.count = response.data.count;
    fetchedStarships.next = response.data.next;
    fetchedStarships.page = action.page;

    yield put(actions.fetchStarshipsSuccess(fetchedStarships));
  } catch (error) {
    yield put(actions.fetchStarshipsFail(error));
  }
}