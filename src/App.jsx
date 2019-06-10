import React, { Component } from 'react';

import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import MainPage from './components/pages';
import Tracking from './components/pages/Tracking';
import NotFoundPage from './components/pages/404';

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={MainPage} />
					<Route exact path="/app" component={Tracking} />
					<Route exact path="/404" component={NotFoundPage} />
					<Redirect to="/404" />
				</Switch>
			</Router>
		);
	}
}

export default App;
