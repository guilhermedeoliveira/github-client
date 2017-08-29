import { FETCH_USER, FETCH_REPOS, FETCH_CURRENT_REPOS } from './types';
import axios from 'axios';

export const fetchUser = username => async dispatch => {
	const res = await axios.get(`https://api.github.com/users/${username}`);

	dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchRepos = username => async dispatch => {
	const res = await axios.get(`https://api.github.com/users/${username}/repos`);

	dispatch({ type: FETCH_REPOS, payload: res.data });
};

export const fetchCurrentRepos = (username, singleRepos) => async dispatch => {
	const res = await axios.get(
		`https://api.github.com/repos/${username}/${singleRepos}`
	);

	dispatch({ type: FETCH_CURRENT_REPOS, payload: res.data });
};
