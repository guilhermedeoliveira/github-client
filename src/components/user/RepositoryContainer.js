import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Grid from 'material-ui/Grid';

import { fetchRepos } from '../../actions';
import Repos from './Repos';

const Container = styled.section`width: 70%;`;

class RepositoryContainer extends Component {
	componentDidMount() {
		const { user } = this.props.match.params;
		const { fetchRepos } = this.props;

		fetchRepos(user);
	}

	renderRepos() {
		const { repos } = this.props;

		if (!repos) {
			return <div>Loading...</div>;
		}

		return _.map(repos, ({ id, name, description, language }) => {
			return (
				<Repos
					key={id}
					name={name}
					description={description}
					language={language}
				/>
			);
		});
	}

	render() {
		return (
			<Container>
				<Grid container spacing={16}>
					{this.renderRepos()}
				</Grid>
			</Container>
		);
	}
}

function mapStateToProps({ repos }) {
	return { repos };
}

export default connect(mapStateToProps, { fetchRepos })(
	withRouter(RepositoryContainer)
);
