import React from 'react';
import { Link } from 'react-router-dom';
import Menu from 'antd/lib/menu';
import Typography from 'antd/lib/typography';
import Button from 'antd/lib/button';

import './NavBar.less';

const { Title } = Typography;
const { SubMenu } = Menu;

class NavBar extends React.Component {
	render() {
		return (
			<div>
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
							? this.props.deerStates.map((element, index) => {
									return (
										<Menu.ItemGroup
											key={element.id}
											title={element.name}
											className={'menu-group'}
										>
											<Menu.Item
												key={element.id}
												onClick={this.props.toggleDeer}
												className={
													element['visible'] ? 'tracker-selected' : 'tracker'
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
						className={'filter-button'}
						onClick={this.props.handleDrawer}
						hidden={this.props.hideFilter}
						style={{ left: '71%' }}
					>
						{console.log(this.props.hideFilter)}
						Filter
					</Button>
				</Menu>
				<FilterDrawer
					drawerVisible={this.props.drawerVisible}
					handleDrawer={this.props.handleDrawer}
					handleDateFilter={this.props.handleDateFilter}
				/>
			</div>
		);
	}
}
export default NavBar;
