import React, { Component } from 'react';
import Map from '../../Map/Map';
import NavBar from '../../NavBar/NavBar';

class Tracking extends Component {
	render() {
		return (
			<div>
				<NavBar />
				<Map />
			</div>
		);
	}
}

Tracking.propTypes = {};

export default Tracking;
