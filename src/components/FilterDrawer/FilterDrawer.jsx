import React from 'react';

import { Drawer } from 'antd';

import EditTrackerForm from 'components/EditTrackerForm';
import AddTrackerForm from 'components/AddTrackerForm';

class FilterDrawer extends React.Component {
	static defaultProps = {
		optionsList: {
			statusOptions: [
				['A', 'Active'],
				['D', 'Disabled'],
				['R', 'Retired'],
				['U', 'Unresponsive'],
				['X', 'Unused'],
			],
			colourOptions: [
				['blue', 'blue'],
				['gray', 'gray'],
				['green', 'green'],
				['purple', 'purple'],
				['white', 'white'],
				['yellow', 'yellow'],
			],
			locationMethodOptions: [['G', 'GPS'], ['L', 'LTE'], ['B', 'GPS + LTE']],
		},
	};

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
						options={this.props.optionsList}
					/>
					<AddTrackerForm options={this.props.optionsList} />
				</Drawer>
			</div>
		);
	}
}

export default FilterDrawer;
