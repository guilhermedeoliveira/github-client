import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';

import userReducer from './userReducer';
import reposReducer from './reposReducer';

export default combineReducers({
	form: reduxForm,
	user: userReducer,
	repos: reposReducer
});
