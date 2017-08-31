import React from 'react';
import styled from 'styled-components';

const MyFooter = styled.div`
	width: 100%;
	height: 20rem;
	text-align: center;
	background-color: #24292e;
`;

const Footer = () => {
	return <MyFooter>&copy; 2017 guilhermedeoliveira</MyFooter>;
};

export default Footer;
