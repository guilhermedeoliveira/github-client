import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { fetchUser } from '../../actions';

const Container = styled.section`
	width: 33%;
	font-weight: 400;
	color: #24292e;
`;

const Avatar = styled.img`
	border-radius: 50%;
	width: 50%;
	height: auto;
`;

const Login = styled.p`
	font-size: 1.5rem;
	font-weight: bold;
	color: #24292e;
`;

const Name = styled.p`font-size: 1.3rem;`;

const Email = styled.p``;

const Location = styled.p``;

const Bio = styled.p``;

const PublicRepos = styled.p``;

const Followers = styled.p``;

const Following = styled.p``;

const Hireable = styled.p``;

class User extends Component {
	componentDidMount() {
		const { user } = this.props.match.params;
		const { fetchUser } = this.props;

		fetchUser(user);
	}

	render() {
		const { user } = this.props;

		if (!user) {
			return <div>Loading...</div>;
		}

		const {
			avatar_url,
			login,
			name,
			email,
			location,
			bio,
			public_repos,
			followers,
			following,
			hireable
		} = user;

		return (
			<Container>
				<Avatar src={avatar_url} />
				<Login>{login}</Login>
				<Name>{name}</Name>
				<Email>{email}</Email>
				<Location>{location}</Location>
				<Bio>{bio}</Bio>
				<Followers>{followers} followers</Followers>
				<Following>{following} following</Following>
				<PublicRepos>{public_repos} public repositories</PublicRepos>
				<Hireable>{hireable ? 'Available for hire' : ''}</Hireable>
			</Container>
		);
	}
}

function mapStateToProps({ user }) {
	return { user };
}

export default connect(mapStateToProps, { fetchUser })(withRouter(User));
