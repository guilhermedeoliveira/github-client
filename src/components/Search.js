import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../actions';

class Search extends Component {
	componentDidMount() {
		this.props.fetchUser();
		console.log(this.state);
	}

	render() {
		return (
			<div>
				<input />
			</div>
		);
	}
}

function mapStateToProps({ user }) {
	console.log(user);
	return { user };
}

export default connect(mapStateToProps, { fetchUser })(Search);
