import React from 'react';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import styled from 'styled-components';

const MyPaper = styled(Paper)`
	margin: 0 1rem 1rem 1rem;

	> div {
		font-size: 10px;
		text-transform: uppercase;
		text-align: center;
	}

	> a {
		text-decoration: none;
		color: #24292e;

		&:hover {
			color: #000;
		}
	}
`;

export const NavSection = styled.div`
	font-size: 10px;
	text-transform: uppercase;
	text-align: center;
`;

const Navigation = ({ children }) => {
	return <MyPaper>{children}</MyPaper>;
};

export default Navigation;
