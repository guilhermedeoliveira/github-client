import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../../actions';
import User from './User';
import RepositoryList from './RepositoryList';

export class MainUser extends Component {
	componentDidMount() {
		const { user } = this.props.match.params;
		this.props.fetchUser(user);
	}

	render() {
		const { user } = this.props;

		if (!user) {
			return <div>Loading...</div>;
		}

		return (
			<div>
				<h3>
					{user.login}
				</h3>
				<User />
				<RepositoryList />
			</div>
		);
	}
}

function mapStateToProps({ user }) {
	return { user };
}

export default connect(mapStateToProps, { fetchUser })(MainUser);
