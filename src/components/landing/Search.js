import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../../actions';

export class Search extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<div>
				<input />
			</div>
		);
	}
}

export default connect(null, { fetchUser })(Search);
