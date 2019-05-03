import { takeLatest } from 'redux-saga/effects';

import {
  fetchPlanetsSaga
} from './planets';

import {
  fetchPlanetSaga
} from './planet';

import {
  fetchStarshipsSaga
} from './starships';

import {
  fetchStarshipSaga
} from './starship';

import * as actionTypes from '../actions/actionTypes';

export function* watchPlanets() {
  yield takeLatest(actionTypes.FETCH_PLANETS, fetchPlanetsSaga)
}

export function* watchPlanet() {
  yield takeLatest(actionTypes.FETCH_PLANET, fetchPlanetSaga)
}

export function* watchStarships() {
  yield takeLatest(actionTypes.FETCH_STARSHIPS, fetchStarshipsSaga)
}

export function* watchStarship() {
  yield takeLatest(actionTypes.FETCH_STARSHIP, fetchStarshipSaga)
}