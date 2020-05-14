import * as actionTypes from './actionTypes';
import {store} from '../index';

import axios from 'react-native-axios';

const getUsers = user => {
  return dispatch => {
    axios
      .get('https://api.github.com/users')
      .then(function(response) {
        console.log(response, '???');
        dispatch({
          type: actionTypes.GETALLUSER,
          payload: response,
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
};

const onFilterUser = user => {
  return dispatch => {
    dispatch({
      type: actionTypes.FILTERUSER,
      payload: user,
    });
  };
};

export {getUsers, onFilterUser};
