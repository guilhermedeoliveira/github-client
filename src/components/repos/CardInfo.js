import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import styled from 'styled-components';

const MyCard = styled(Card)`width: 66%;`;

const MyIcon = styled.i`
	display: block;
	padding-left: 1rem;
	margin-bottom: 1rem;
`;

const MyForkIcon = styled.i`
	display: block;
	padding-left: 1.2rem;
	margin-bottom: 1rem;
`;

const MyCardActions = styled(CardActions)`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

const CardInfo = ({
	user,
	repos,
	name,
	language,
	description,
	default_branch,
	watchers_count,
	stargazers_count,
	forks
}) => (
	<MyCard>
		<CardTitle title={name} subtitle={language} />

		<CardText>{description}</CardText>
		<CardText>{`Default branch is ${default_branch}`}</CardText>

		<MyIcon className="fa fa-eye" aria-hidden="true">
			&nbsp; {watchers_count ? watchers_count : 'No watchers'}
		</MyIcon>
		<MyIcon className="fa fa-star" aria-hidden="true">
			&nbsp; {stargazers_count ? stargazers_count : 'No stars'}
		</MyIcon>
		<MyForkIcon className="fa fa-code-fork" aria-hidden="true">
			&nbsp; {forks ? forks : 'No forks'}
		</MyForkIcon>

		<Divider />

		<MyCardActions>
			<a target="_blank" href={`https://github.com/${user}/${repos}`}>
				<FlatButton label="Visit repos at Github" />
			</a>
			<Link to={`/users/${user}`}>
				<FlatButton label="Return to repos list" />
			</Link>
		</MyCardActions>
	</MyCard>
);

export default CardInfo;
