import React from 'react';
import styled from 'styled-components';

import Search from './Search';

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	text-align: center;
`;

const Title = styled.h1`
	color: red;
	font-weight: 300;
`;

const SubTitle = styled.h3`color: red;`;

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
			<Wrapper>
				<Title>Github Client</Title>
				<SubTitle>Find the most popular repositories of a given user</SubTitle>
				<Search />
			</Wrapper>
		</div>
	);
};

export default MainLanding;
