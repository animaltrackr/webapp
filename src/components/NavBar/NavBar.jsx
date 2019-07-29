import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Typography, Button } from 'antd';
import FilterDrawer from '../FilterDrawer/FilterDrawer';

import './NavBar.less';

const { Title } = Typography;

class NavBar extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="menu-wrapper">
					<Title level={3}>
						<Link to="/">animaltrackr</Link>
					</Title>
					<Button
						onClick={this.props.toggleDrawer}
						disabled={this.props.hideFilter}
					>
						Filter
					</Button>
				</div>
				<FilterDrawer
					toggleDrawer={this.props.toggleDrawer}
					drawerVisible={this.props.drawerVisible}
					handleDateFilter={this.props.handleDateFilter}
					updateState={this.props.updateState}
					finishedLoading={this.props.finishedLoading}
				/>
			</React.Fragment>
		);
	}
}

NavBar.propTypes = {
	drawerVisible: PropTypes.bool.isRequired,
	hideFilter: PropTypes.bool.isRequired,
	toggleDrawer: PropTypes.func.isRequired,
	handleDateFilter: PropTypes.func.isRequired,
};

export default NavBar;
