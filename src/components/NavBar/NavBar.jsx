import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Menu, Typography, Button } from 'antd';
import FilterDrawer from '../FilterDrawer/FilterDrawer';

import './NavBar.less';

const { Title } = Typography;
const { SubMenu } = Menu;

class NavBar extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Menu mode="horizontal" className="menu-wrapper">
					<Menu.Item>
						<Title level={3}>
							<Link to="/">animaltrackr</Link>
						</Title>
					</Menu.Item>
					<SubMenu
						className="submenu-wrapper"
						title={
							<span className="submenu-title-wrapper">Active Collars</span>
						}
					>
						{this.props.deerStates
							? this.props.deerStates.map((deer, index) => {
									return (
										<Menu.ItemGroup
											key={deer.id}
											title={deer.name}
											className="menu-group"
										>
											<Menu.Item
												key={deer.id}
												onClick={this.props.toggleDeer}
												className={
													deer.visible ? 'tracker-selected' : 'tracker'
												}
											>
												Show Tracks
											</Menu.Item>
										</Menu.ItemGroup>
									);
							  })
							: null}
						<Menu.Item
							onClick={this.props.toggleAllDeer}
							className={this.props.showAll ? 'tracker-selected' : 'tracker'}
						>
							Show All
						</Menu.Item>
					</SubMenu>
					<Button
						onClick={this.props.toggleDrawer}
						hidden={this.props.hideFilter}
						style={{ left: '71%' }}
					>
						Filter
					</Button>
				</Menu>
				<FilterDrawer
					deerStates={this.props.deerStates}
					drawerVisible={this.props.drawerVisible}
					toggleDrawer={this.props.toggleDrawer}
					handleDateFilter={this.props.handleDateFilter}
					updateState={this.props.updateState}
					finishedLoading={this.props.finishedLoading}
				/>
			</React.Fragment>
		);
	}
}
export default NavBar;
