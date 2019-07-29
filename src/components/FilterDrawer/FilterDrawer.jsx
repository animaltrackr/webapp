import React from 'react';

import Drawer from 'antd/lib/drawer';
import Typography from 'antd/lib/typography';

import DateRangeForm from '../DateRangeForm/DateRangeForm';
import EditTrackerForm from '../EditTrackerForm/EditTrackerForm';

const { Title } = Typography;

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
					width={'300px'}
				>
					<DateRangeForm
						handleDateFilter={this.props.handleDateFilter}
						handleDrawer={this.props.toggleDrawer}
					/>
					<Title level={4}>Edit Trackers</Title>
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
