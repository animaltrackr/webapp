import React from 'react';

import { Drawer } from 'antd';

import EditTrackerForm from 'components/EditTrackerForm';

class FilterDrawer extends React.Component {
	render() {
		return (
			<div>
				<Drawer
					title="Edit Tracker Properties"
					placement="right"
					closable={false}
					onClose={this.props.toggleDrawer}
					visible={this.props.drawerVisible}
					width="300px"
				>
					<EditTrackerForm
						deerStates={this.props.deerStates}
						updateState={this.props.updateState}
						finishedLoading={this.props.finishedLoading}
					/>
				</Drawer>
			</div>
		);
	}
}

export default FilterDrawer;
