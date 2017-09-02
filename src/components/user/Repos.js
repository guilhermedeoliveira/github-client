import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

import { fetchUser } from '../../actions';

const MyPaper = styled(Paper)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: auto;
	padding: 1rem;

	> a {
		text-decoration: none;
		color: #24292e;

		&:hover {
			color: #000;
		}
	}
`;

const Description = styled.p``;

const DateContainer = styled.div`
	flex-grow: 1;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

class Repos extends Component {
	componentDidMount() {
		const { user } = this.props.match.params;
		const { fetchUser } = this.props;

		fetchUser(user);
	}

	render() {
		const { user } = this.props.match.params;
		const { name, language, created, updated } = this.props;

		return (
			<Grid item xs={12} sm={4}>
				<MyPaper>
					<Link to={`/users/${user}/${name}`}>
						<Typography type="headline" style={{ display: 'inline-block' }}>
							{name}
						</Typography>
						<Description>
							{language || 'There is no identified language'}
						</Description>

						<Divider />

						<DateContainer>
							<Typography>Created at</Typography>
							<Typography>Last update</Typography>
						</DateContainer>

						<DateContainer>
							<Typography>{created}</Typography>
							<Typography>{updated}</Typography>
						</DateContainer>
					</Link>
				</MyPaper>
			</Grid>
		);
	}
}

export default connect(null, { fetchUser })(withRouter(Repos));
