import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

import { fetchUser } from '../../actions';

const MyPaper = styled(Paper)`
	height: 12rem;
	padding: 1rem;
	text-align: center;

	> a {
		text-decoration: none;
		color: #24292e;

		&:hover {
			color: #000;
		}
	}
`;

const Name = styled.h3`
	font-weight: 200;
	padding: 0.1rem 1rem;
`;

const Language = styled.p`
	padding-left: 1rem;
	padding-bottom: 0.5rem;
`;

class Repos extends Component {
	componentDidMount() {
		const { user } = this.props.match.params;
		const { fetchUser } = this.props;

		fetchUser(user);
	}

	render() {
		const { user } = this.props.match.params;
		const { name, description, language } = this.props;

		return (
			<Grid item xs={12} sm={4}>
				<MyPaper>
					<Link to={`/users/${user}/${name}`}>
						<Name>{name}</Name>
						<p>{description}</p>
						<Language>{language}</Language>
					</Link>
				</MyPaper>
			</Grid>
		);
	}
}

export default connect(null, { fetchUser })(withRouter(Repos));
