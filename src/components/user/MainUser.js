import React, { Component } from 'react';
import { connect } from 'react-redux';

import User from './User';
import RepositoryList from './RepositoryList';

export class MainUser extends Component {
	render() {
		return (
			<div>
				<User />
				<RepositoryList />
			</div>
		);
	}
}

function mapStateToProps({ user }) {
	return { user };
}

export default connect(mapStateToProps)(MainUser);
