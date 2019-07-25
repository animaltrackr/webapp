import React from 'react';
import { Link } from 'react-router-dom';
import Menu from 'antd/lib/menu';
import Typography from 'antd/lib/typography';

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
									<Menu.ItemGroup key={element.id} title={element.name}>
										<Menu.Item key={element.id} onClick={this.props.toggleDeer}>
											Show Tracks
										</Menu.Item>
									</Menu.ItemGroup>
								);
						  })
						: null}
					<Menu.Item onClick={this.props.enableAllDeer}>Show All</Menu.Item>
				</SubMenu>
			</Menu>
		);
	}
}
export default NavBar;
