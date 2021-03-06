import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MainLanding from './landing/MainLanding';
import MainUser from './user/MainUser';
import MainRepos from './repos/MainRepos';

class App extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<div>
						<Route exact path="/" component={MainLanding} />
						<Route exact path="/users/:user" component={MainUser} />
						<Route path="/users/:user/:repos" component={MainRepos} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
