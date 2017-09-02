import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import User from '../user/User';
import ReposInfo from './ReposInfo';
import Navigation, { NavSection } from '../user/Navigation';

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-start;
	padding: 50px 70px 50px 0;
`;

const IconsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`;

const MainRepos = ({ match: { params: { user } } }) => {
	return (
		<Container>
			<IconsContainer>
				<Navigation>
					<Link to="/">
						<i className="fa fa-search fa-2x" aria-hidden="true">
							<NavSection>search</NavSection>
						</i>
					</Link>
				</Navigation>
				<Navigation>
					<Link to={`/users/${user}`}>
						<i className="fa fa-folder-open-o fa-2x" aria-hidden="true">
							<NavSection>repos</NavSection>
						</i>
					</Link>
				</Navigation>
			</IconsContainer>
			<User />
			<ReposInfo />
		</Container>
	);
};

export default withRouter(MainRepos);
