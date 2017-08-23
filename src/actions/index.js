import { FETCH_USER } from './types';
import axios from 'axios';

export const fetchUser = () => async dispatch => {
	// const res = await axios.get('https://api.github.com/users/${user}');
	const res = await axios.get(
		'https://api.github.com/users/guilhermedeoliveira'
	);

	dispatch({ type: FETCH_USER, payload: res.data });
};
