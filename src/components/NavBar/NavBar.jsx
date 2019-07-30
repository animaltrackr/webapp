import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Typography, Icon } from 'antd';
import FilterDrawer from '../FilterDrawer/FilterDrawer';

import './NavBar.less';

const { Title } = Typography;

class NavBar extends React.Component {
	static propTypes = {
		drawerVisible: PropTypes.bool.isRequired,
		hideFilter: PropTypes.bool.isRequired,
		toggleDrawer: PropTypes.func.isRequired,
		handleDateFilter: PropTypes.func.isRequired,
	};

	render() {
		return (
			<React.Fragment>
				<div className="menu-wrapper">
					<Title level={3}>
						<Link to="/">animaltrackr</Link>
					</Title>
					<div className="cog-wrapper">
						<Icon
							className={`cog-icon`}
							type="setting"
							onClick={this.props.toggleDrawer}
						/>
					</div>
				</div>
				<FilterDrawer
					deerStates={this.props.deerStates}
					toggleDrawer={this.props.toggleDrawer}
					drawerVisible={this.props.drawerVisible}
					handleDateFilter={this.props.handleDateFilter}
					updateState={this.props.updateState}
					finishedLoading={this.props.finishedLoading}
					addDeerToDeerStates={this.props.addDeerToDeerStates}
				/>
			</React.Fragment>
		);
	}
}

export default NavBar;
