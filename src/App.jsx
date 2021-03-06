import React, { Component } from 'react';

import {
	HashRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';

import './App.less';
import MainPage from './pages';
import Tracking from './pages/Tracking';
import NotFoundPage from './pages/NotFoundPage';

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
