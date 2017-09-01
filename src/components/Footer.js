import React from 'react';
import styled from 'styled-components';

const MyFooter = styled.footer`
	width: 100%;
	height: 2rem;
	text-align: center;
	color: #fff;
	background-color: #24292e;
`;

const Footer = () => {
	return <MyFooter>&copy; 2017 guilhermedeoliveira</MyFooter>;
};

export default Footer;
