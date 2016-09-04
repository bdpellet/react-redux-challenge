import { RETRIEVE_DATA } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case RETRIEVE_DATA:
      return action.payload;
  }

  return state;
}
