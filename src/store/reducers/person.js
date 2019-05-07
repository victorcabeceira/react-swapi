import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  person: { },
  loading: false,
};

const fetchPersonStart = (state, _) => {
  return updateObject(state, { loading: true });
}

const fetchPersonSuccess = (state, action) => {
  return updateObject(state, { person: action.person, loading: false });
}

const fetchPersonFail = (state, action) => {
  return updateObject(state, { loading: false, error: action.error });
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PERSON_START: return fetchPersonStart(state, action);
    case actionTypes.FETCH_PERSON_SUCCESS: return fetchPersonSuccess(state, action);
    case actionTypes.FETCH_PERSON_FAIL: return fetchPersonFail(state, action);
    default:
      return state;
  }
}

export default reducer;