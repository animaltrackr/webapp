import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';

import './App.css';
import MainPage from './components/pages';
import Tracking from './components/pages/Tracking';
import NotFoundPage from './components/pages/NotFoundPage';

class App extends Component {
	render() {
		return (
			<TransitionGroup>
				<CSSTransition
					key="id"
					className="page"
					timeout={{
						enter: 1000,
						exit: 1000,
					}}
				>
					<Router>
						<Switch>
							<Route exact path="/" component={MainPage} />
							<Route exact path="/app" component={Tracking} />
							<Route exact path="/404" component={NotFoundPage} />
							<Redirect to="/404" />
						</Switch>
					</Router>
				</CSSTransition>
			</TransitionGroup>
		);
	}
}

export default App;
