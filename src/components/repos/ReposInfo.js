import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import * as actions from '../../actions';

const Name = styled.h3`font-size: 1.5rem;`;

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
				<Name>{name}</Name>
				<h4>Language: {language}</h4>
				<h4>Branch: {default_branch}</h4>
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
