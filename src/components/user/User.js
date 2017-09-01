import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';

import { fetchUser } from '../../actions';

const MyPaper = styled(Paper)`
	width: 25%;
	font-weight: 300;
	padding: 1rem 1rem 0 1rem;
	margin-right: 1rem;
`;

const Avatar = styled.img`
	display: block;
	border-radius: 50%;
	width: 50%;
	height: auto;
	margin: 0 auto;
`;

const Login = styled.p`
	font-size: 1.5rem;
	font-weight: bold;
	text-align: center;
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
			<MyPaper>
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
			</MyPaper>
		);
	}
}

function mapStateToProps({ user }) {
	return { user };
}

export default connect(mapStateToProps, { fetchUser })(withRouter(User));
