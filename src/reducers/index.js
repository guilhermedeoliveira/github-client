import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';

import userReducer from './userReducer';
import reposReducer from './reposReducer';
import currentReposReducer from './currentReposReducer';

export default combineReducers({
	form: reduxForm,
	user: userReducer,
	repos: reposReducer,
	currentRepos: currentReposReducer
});
