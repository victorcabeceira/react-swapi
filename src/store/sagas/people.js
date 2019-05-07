import axios from '../../axios-swapi';
import { put } from 'redux-saga/effects';

import * as actions from '../actions';

export function* fetchPeopleSaga(action) {
  yield put(actions.fetchPeopleStart());
  let queryParams = action.page > 0 ? ('?page=' + action.page) : '';

  try {
    const response = yield axios.get('/people/' + queryParams);
    const fetchedPeople = { count: 0, results: [], next: '', page: 1 };

    for (const person in response.data.results) {
      const peopleWithRandomImgNumber = {
        ...response.data.results[person],
        randomImgNumber: Math.floor(Math.random() * 9),
      }
      fetchedPeople.results.push(peopleWithRandomImgNumber);
    }
    fetchedPeople.count = response.data.count;
    fetchedPeople.next = response.data.next;
    fetchedPeople.page = action.page;

    yield put(actions.fetchPeopleSuccess(fetchedPeople));
  } catch (error) {
    yield put(actions.fetchPeopleFail(error));
  }
}