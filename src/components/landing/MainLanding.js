import React from 'react';
import styled from 'styled-components';

import Search from './Search';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	text-align: center;
`;

const Title = styled.h1`
	font-size: 5rem;
	color: #24292e;
	font-weight: 200;
`;

const SubTitle = styled.h2`
	font-size: 2rem;
	font-weight: 300;
	color: #24292e;
	margin-bottom: 50px;
`;

const Card = styled.div`
	background: #fff;
	border-radius: 2px;
	display: inline-block;
	height: 300px;
	margin: 1rem;
	position: relative;
	width: 300px;
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
