import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import User from './User';
import RepositoryContainer from './RepositoryContainer';
import Navigation, { NavSection } from './Navigation';

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-start;
	padding: 50px 70px 50px 0;
`;

const MainUser = () => {
	return (
		<Container>
			<Navigation>
				<Link to="/">
					<i className="fa fa-search fa-2x" aria-hidden="true">
						<NavSection>search</NavSection>
					</i>
				</Link>
			</Navigation>
			<User />
			<RepositoryContainer />
		</Container>
	);
};

export default MainUser;
