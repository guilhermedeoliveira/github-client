import { FETCH_CURRENT_REPOS } from '../actions/types';

export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_CURRENT_REPOS:
			return { ...action.payload };
		default:
			return state;
	}
}
