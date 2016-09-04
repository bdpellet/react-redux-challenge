import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form'
import firebaseReducer from './fbReducer';

const rootReducer = combineReducers({
  form: formReducer,
  fb: firebaseReducer
});

export default rootReducer;
