import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import { fetchUser } from '../../actions';

class Repos extends Component {
	componentDidMount() {
		const { user } = this.props.match.params;
		const { fetchUser } = this.props;

		fetchUser(user);
	}

	render() {
		const { user } = this.props.match.params;
		const { name, language } = this.props;

		return (
			<div>
				<Link to={`/users/${user}/${name}`}>
					<h3>Repos</h3>
					<p>
						{name}
					</p>
					<p>
						{language}
					</p>
				</Link>
			</div>
		);
	}
}

export default connect(null, { fetchUser })(withRouter(Repos));
