import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchUser } from '../../actions';

// const User = ({ avatar_url, login, email, bio, followers, following }) => {
class User extends Component {
	componentDidMount() {
		const { user } = this.props.match.params;
		this.props.fetchUser(user);
	}

	render() {
		const { user } = this.props;

		if (!user) {
			return <div>Loading...</div>;
		}

		const { avatar_url, login, email, bio, followers, following } = user;

		console.log(this.props); //////////////////////////////////////////////////////

		return (
			<div>
				<h3>
					login: {login}
				</h3>
				<h3>
					Email: {email}
				</h3>
				<h3>
					Bio: {bio}
				</h3>
				<h3>
					followers: {followers}
				</h3>
				<h3>
					following: {following}
				</h3>
			</div>
		);
	}
}

function mapStateToProps({ user }) {
	return { user };
}

export default connect(mapStateToProps, { fetchUser })(withRouter(User));
