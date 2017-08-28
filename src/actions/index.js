import { FETCH_USER } from './types';
import axios from 'axios';

export const fetchUser = username => async dispatch => {
	const res = await axios.get(`https://api.github.com/users/${username}`);

	dispatch({ type: FETCH_USER, payload: res.data });
};
