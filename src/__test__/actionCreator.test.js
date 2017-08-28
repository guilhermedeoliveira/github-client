import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { expect } from 'chai';

import * as actions from '../actions';
import * as types from '../actions/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Async Fetch User', () => {
	afterEach(() => {
		nock.cleanAll();
	});

	it('should fetch a Github user', () => {
		nock('https://api.github.com/users')
			.get('/guilhermedeoliveira')
			.reply(200, { payload: { user: 'user' } });

		const expectedActions = [
			{ type: types.FETCH_USER, payload: { user: 'user' } }
		];
		const store = mockStore({ user: null });

		return store.dispatch(actions.fetchUser()).then(() => {
			// return of async actions
			expect(store.getActions()).toEqual(expectedActions);
		});
	});
});
