import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import { fetchUser } from '../../actions';

export class Search extends Component {
	renderField(field) {
		return (
			<div>
				<input type="text" {...field.input} />
				<div>
					{field.meta.touched && field.meta.error}
				</div>
			</div>
		);
	}

	onSubmitUser({ username }) {
		this.props.fetchUser(username);
	}

	render() {
		console.log(this.props);
		return (
			<form onSubmit={this.props.handleSubmit(this.onSubmitUser.bind(this))}>
				<Field
					name="username"
					component={this.renderField}
					type="text"
					placeholder="Search user"
				/>
				<button type="submit">Submit</button>
				<div style={{ marginTop: '20px' }}>
					{/* {this.props.meta.touched && this.props.meta.error} */}
				</div>
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

// export default connect(null, { fetchUser })(Search);
function mapStateToProps(state) {
	console.log(state);
	return { state };
}

export default reduxForm({
	validate,
	form: 'search'
})(connect(mapStateToProps, { fetchUser })(Search));
