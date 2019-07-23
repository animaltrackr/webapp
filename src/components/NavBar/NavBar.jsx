import React from 'react';
import Menu from 'antd/lib/menu';
import Typography from 'antd/lib/typography';

import { Link } from 'react-router-dom';
import './NavBar.css';

const { Title } = Typography;
const { SubMenu } = Menu;

class NavBar extends React.Component {
	render() {
		return (
			<Menu mode="horizontal">
				<Menu.Item>
					<Title level={3}>
						<Link to="/">animaltrckr</Link>
					</Title>
				</Menu.Item>
				<SubMenu
					title={<span className="submenu-title-wrapper">Active Collars</span>}
				>
					{this.props.deerStates
						? this.props.deerStates.map((element, index) => {
								return (
									<Menu.ItemGroup title={element['name']}>
										<Menu.Item key={index} onClick={this.props.handler}>
											Show Tracks
										</Menu.Item>
									</Menu.ItemGroup>
								);
						  })
						: ''}
					<Menu.Item
						key={this.props.deerStates ? this.props.deerStates.length + 1 : 1}
						onClick={this.props.handler}
					>
						Show All
					</Menu.Item>
					}
				</SubMenu>
			</Menu>
		);
	}
}
export default NavBar;
