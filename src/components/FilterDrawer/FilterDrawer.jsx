import React from 'react';

import Drawer from 'antd/lib/drawer';

import DateRangeForm from '../DateRangeForm/DateRangeForm';

class FilterDrawer extends React.Component {
	render() {
		return (
			<div>
				<Drawer
					title="Filter Results by Time Range"
					placement="right"
					closable={false}
					onClose={this.props.toggleDrawer}
					visible={this.props.drawerVisible}
					width={'350px'}
				>
					<DateRangeForm
						handleDateFilter={this.props.handleDateFilter}
						handleDrawer={this.props.toggleDrawer}
					/>
				</Drawer>
			</div>
		);
	}
}

export default FilterDrawer;
