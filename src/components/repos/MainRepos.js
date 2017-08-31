import React from 'react';
import styled from 'styled-components';

import User from '../user/User';
import ReposInfo from './ReposInfo';

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-start;
	padding: 50px 70px;
`;

const MainRepos = () => {
	return (
		<Container>
			<User />
			<ReposInfo />
		</Container>
	);
};

export default MainRepos;
