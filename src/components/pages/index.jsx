import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
	return (
		<div>
			<h3>Welcome to our Wildlife Tracking IoT Project</h3>
			<Link to="app">Go to Tracking Page</Link>
		</div>
	);
};

export default MainPage;
