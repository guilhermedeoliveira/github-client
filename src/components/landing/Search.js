import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { withRouter } from 'react-router-dom';

import { fetchUser } from '../../actions';

export class Search extends Component {
	renderField(field) {
		const { input, meta: { touched, error } } = field;

		return (
			<div>
				<input type="text" {...input} />
				<div>
					{touched && error}
				</div>
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
				<button type="submit">Submit</button>
				<div style={{ marginTop: '20px' }} />
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
