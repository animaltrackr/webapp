import React from 'react';
import { Link } from 'react-router-dom';
import Menu from 'antd/lib/menu';
import Typography from 'antd/lib/typography';
import Button from 'antd/lib/button';
import FilterDrawer from '../FilterDrawer/FilterDrawer';

import './NavBar.less';

const { Title } = Typography;
const { SubMenu } = Menu;

class NavBar extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Menu mode="horizontal" className="menu-wrapper">
					<Menu.Item className="title-item">
						<Title level={3}>
							<div className="img-wrapper">
								<figure className="svg desc-img-logo logo" />
							</div>
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
													deer['visible'] ? 'tracker-selected' : 'tracker'
												}
											>
												Show Tracks
											</Menu.Item>
										</Menu.ItemGroup>
									);
							  })
							: null}
						<Menu.Item
							onClick={this.props.enableAllDeer}
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
					drawerVisible={this.props.drawerVisible}
					toggleDrawer={this.props.toggleDrawer}
					handleDateFilter={this.props.handleDateFilter}
				/>
			</React.Fragment>
		);
	}
}
export default NavBar;
