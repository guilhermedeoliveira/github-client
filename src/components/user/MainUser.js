import React from 'react';
import styled from 'styled-components';

import User from './User';
import RepositoryContainer from './RepositoryContainer';

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-start;
	padding: 50px 70px;
`;

const MainUser = () => {
	return (
		<Container>
			<User />
			<RepositoryContainer />
		</Container>
	);
};

export default MainUser;
