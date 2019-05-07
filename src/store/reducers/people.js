import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  people: { count: 0, results: [], next: '', page: 1 },
  loading: false,
};

const fetchPeopleStart = (state, _) => {
  return updateObject(state, { loading: true });
}

const fetchPeopleSuccess = (state, action) => {
  return updateObject(state, { people: action.people, loading: false });
}

const fetchPeopleFail = (state, action) => {
  return updateObject(state, { loading: false, error: action.error });
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PEOPLE_START: return fetchPeopleStart(state, action);
    case actionTypes.FETCH_PEOPLE_SUCCESS: return fetchPeopleSuccess(state, action);
    case actionTypes.FETCH_PEOPLE_FAIL: return fetchPeopleFail(state, action);
    default:
      return state;
  }
}

export default reducer;