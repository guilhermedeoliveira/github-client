import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../../actions';

class ReposInfo extends Component {
	componentDidMount() {
		const { user, repos } = this.props.match.params;
		const { fetchUser, fetchCurrentRepos } = this.props;

		fetchUser(user);
		fetchCurrentRepos(user, repos);
	}

	render() {
		const { user, repos } = this.props.match.params;
		const { name, language, default_branch } = this.props.currentRepos;

		return (
			<div>
				<h3>ReposInfo</h3>
				<h4>
					Name: {name}
				</h4>
				<h4>
					Language: {language}
				</h4>
				<h4>
					Branch: {default_branch}
				</h4>
				<h4>
					<a href={`https://github.com/${user}/${repos}`}>
						Visit Repos in Github
					</a>
				</h4>
			</div>
		);
	}
}

function mapStateToProps({ currentRepos }) {
	return { currentRepos };
}

export default connect(mapStateToProps, actions)(withRouter(ReposInfo));
