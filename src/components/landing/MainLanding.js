import React from 'react';
import styled from 'styled-components';

import Search from './Search';

const Container = styled.div`text-align: center;`;

const Title = styled.h1`
	font-size: 5rem;
	font-weight: 200;
`;

const SubTitle = styled.h2`
	font-size: 2rem;
	font-weight: 300;
	margin-bottom: 50px;
`;

const MainLanding = () => {
	return (
		<div>
			<Container>
				<Title>Github Client</Title>
				<SubTitle>Find repositories of a Github user</SubTitle>
				<Search />
			</Container>
		</div>
	);
};

export default MainLanding;
