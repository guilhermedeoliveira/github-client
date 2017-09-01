import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

const MyCard = styled(Card)`width: 66%;`;

const MySubtitle = styled(Typography)`padding-bottom: 0.8rem;`;

const MyText = styled(Typography)`padding-bottom: 0.8rem;`;

const MyIcon = styled.i`
	display: block;
	margin-bottom: 1rem;
`;

const MyForkIcon = styled.i`
	display: block;
	margin-bottom: 1rem;
	padding-left: 0.2rem;
`;

const MyCardActions = styled(CardActions)`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

const MyAnchor = styled.a`text-decoration: none;`;

const MyLink = styled(Link)`text-decoration: none;`;

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
		<CardContent style={{ paddingBottom: 0 }}>
			<Typography type="headline" style={{ fontSize: '25px' }}>
				{name}
			</Typography>
			<MySubtitle type="caption">{language}</MySubtitle>

			<MyText type="subheading">{description}</MyText>
			<MyText type="union">{`Default branch is ${default_branch}`}</MyText>

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

			<MyCardActions style={{ padding: 0 }}>
				<MyAnchor target="_blank" href={`https://github.com/${user}/${repos}`}>
					<Button children="Visit repos at Github" style={{ paddingLeft: 0 }} />
				</MyAnchor>
				<MyLink to={`/users/${user}`}>
					<Button children="Return to repos list" style={{ paddingRight: 0 }} />
				</MyLink>
			</MyCardActions>
		</CardContent>
	</MyCard>
);

export default CardInfo;
