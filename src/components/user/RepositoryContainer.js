import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchRepos } from '../../actions';
import Repos from './Repos';

class RepositoryContainer extends Component {
	componentDidMount() {
		const { user } = this.props.match.params;
		this.props.fetchRepos(user);
	}

	renderRepos() {
		const { repos } = this.props;

		// if (!repos) {
		// 	return <div>Loading...</div>;
		// }

		return _.map(repos, ({ name, language, id }) => {
			return <Repos key={id} language={language} name={name} />;
		});
	}

	render() {
		console.log(this.props); //////////////////////////////////////////////////////

		return (
			<div>
				{this.renderRepos()}
			</div>
		);
	}
}

function mapStateToProps({ repos }) {
	return { repos };
}

export default connect(mapStateToProps, { fetchRepos })(
	withRouter(RepositoryContainer)
);
