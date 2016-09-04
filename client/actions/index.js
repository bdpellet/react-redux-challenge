import Firebase from 'firebase';
import * as types from './types';
import _ from 'lodash';

const ref = new Firebase('https://disp-challenge.firebaseio.com/');

// get all data, returns subjects and people
export const retrieveData = () => {
	return dispatch => {
    ref.on('value', snapshot => {
      dispatch({
        type: types.RETRIEVE_DATA,
        payload: snapshot.val() || {}
      });
    });
  };
}

// handles adding new subjects and people to firebase
export const addRecord = (values) => {
  const obj = _.omit(values, 'type') 
  let friends, subjects, person, key, data;

  return dispatch => {
    if (values.type === 'subjects') {
      ref.child('/subjects').push(obj);
    } else if (values.type === 'people') {
    	// format friend and subject data
      friends = _.reduce(obj.friends, (memo, friend) => {memo[friend] = true; return memo}, {});
      subjects = _.reduce(obj.subjects, (memo, subject) => {memo[subject] = true; return memo}, {});

      // add new person to people object
      person = ref.child('/people').push({name:values.name, subjects:subjects, friends:friends});
      key = person.key();

      // handle creating a friend link between person and each friend
      for (let friend in friends) {
        ref.child('/people/' + friend).on('value', snapshot => {
          data = snapshot.val();
        });

        data.friends = data.friends || {};
        data.friends[key] = true;
        ref.child('/people/' + friend).set(data);
      }
    }
  };
}