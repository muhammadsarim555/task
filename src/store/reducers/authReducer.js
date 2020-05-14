import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  user: null,
  loading: false,
  filterUser: null,
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GETALLUSER:
      return {
        ...INITIAL_STATE,
        user: action.payload,
      };

    case actionTypes.FILTERUSER:
      return {
        ...INITIAL_STATE,
        filterUser: action.payload,
      };

    default:
      return state;
  }
};

export default AuthReducer;
