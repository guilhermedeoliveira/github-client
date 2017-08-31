import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../../actions';
import CardInfo from './CardInfo';

class ReposInfo extends Component {
	componentDidMount() {
		const { user, repos } = this.props.match.params;
		const { fetchUser, fetchCurrentRepos } = this.props;

		fetchUser(user);
		fetchCurrentRepos(user, repos);
	}

	render() {
		const { user, repos } = this.props.match.params;
		const {
			name,
			language,
			default_branch,
			description,
			watchers_count,
			stargazers_count,
			forks
		} = this.props.currentRepos;

		return (
			<CardInfo
				user={user}
				repos={repos}
				name={name}
				language={language}
				description={description}
				default_branch={default_branch}
				watchers_count={watchers_count}
				stargazers_count={stargazers_count}
				forks={forks}
			/>
		);
	}
}

function mapStateToProps({ currentRepos }) {
	return { currentRepos };
}

export default connect(mapStateToProps, actions)(withRouter(ReposInfo));
