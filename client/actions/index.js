import Firebase from 'firebase';
import * as types from './types';

const ref = new Firebase('https://disp-challenge.firebaseio.com/');

export const test = () => {
	return dispatch => {
    ref.on('value', snapshot => {
      dispatch({
        type: types.TEST,
        payload: snapshot.val() || {}
      });
    });
  };
}
