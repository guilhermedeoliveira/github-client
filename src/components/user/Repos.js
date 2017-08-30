import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import styled from 'styled-components';

import { fetchUser } from '../../actions';

const Card = styled.article`
	width: 33%;
	height: 13rem;
	box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
		0 3px 1px -2px rgba(0, 0, 0, 0.2);
	margin-bottom: 2rem;
	font-size: 1.2rem;

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
			<Card>
				<Link to={`/users/${user}/${name}`}>
					<Name>{name}</Name>
					<p>{description}</p>
					<Language>{language}</Language>
				</Link>
			</Card>
		);
	}
}

export default connect(null, { fetchUser })(withRouter(Repos));
