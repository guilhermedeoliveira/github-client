import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { fetchUser } from '../../actions';

const Input = styled.input`
	padding: 12px 20px;
	color: #24292e;
	margin: 8px 0;
	display: inline-block;
	border: none;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
	border-radius: 4px;
	box-sizing: border-box;
	width: 33%;

	&:hover {
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
		transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
	}

	&:focus {
		outline: none;
	}
`;

const Error = styled.div`
	color: red;
	font-weight: 300;
	margin: 5px 0;
`;

const Submit = styled.input`
	width: 33%;
	background-color: #24292e;
	color: white;
	padding: 14px 20px;
	border: none;
	border-radius: 4px;
	cursor: pointer;
}

	&:hover {
		background-color: #000;
}
`;

export class Search extends Component {
	renderField(field) {
		const { input, meta: { touched, error } } = field;

		return (
			<div>
				<Input type="text" placeholder="username..." {...input} />
				<Error>{touched && error}</Error>
			</div>
		);
	}

	onSubmitUser({ username }) {
		const { fetchUser, history } = this.props;

		fetchUser(username, history);
		history.push(`/users/${username}`);
	}

	render() {
		const { handleSubmit } = this.props;

		return (
			<form onSubmit={handleSubmit(this.onSubmitUser.bind(this))}>
				<Field
					name="username"
					component={this.renderField}
					type="text"
					placeholder="Search user"
				/>
				<Submit type="submit" value="Submit" />
			</form>
		);
	}
}

function validate(values) {
	const errors = {};

	if (!values.username) {
		errors.username = 'Please, enter a username';
	}

	return errors;
}

export default reduxForm({
	validate,
	form: 'search'
})(connect(null, { fetchUser })(withRouter(Search)));
