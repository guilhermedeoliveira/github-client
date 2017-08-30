import React from 'react';
import styled from 'styled-components';

import User from './User';
import RepositoryContainer from './RepositoryContainer';

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-start;
	padding: 50px 70px;
`;

const MainUser = () => {
	return (
		<Wrapper>
			<User />
			<RepositoryContainer />
		</Wrapper>
	);
};

export default MainUser;
