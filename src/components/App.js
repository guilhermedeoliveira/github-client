import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MainLanding from './landing/MainLanding';
import MainUser from './user/MainUser';
import Footer from './Footer';

class App extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<div>
						<Route exact path="/" component={MainLanding} />
						<Route path="/users/:user" component={MainUser} />
						{/* <Route path="/users/repos" component={SurveyNew} /> */}
						<Footer />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
