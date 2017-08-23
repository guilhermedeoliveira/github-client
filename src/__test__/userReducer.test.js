import reducer from '../reducers/userReducer';
import * as types from '../actions/types';

describe('userReducer', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual(null);
	});

	it('should handle fetch_USER', () => {
		expect(
			reducer(null, {
				type: types.FETCH_USER,
				payload: 'username'
			})
		).toEqual('username');
	});
});
