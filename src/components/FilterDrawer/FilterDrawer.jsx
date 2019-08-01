import React from 'react';

import { Drawer, Icon } from 'antd';

import EditTrackerForm from '../EditTrackerForm/EditTrackerForm';
import AddTrackerForm from '../AddTrackerForm/AddTrackerForm';

import './FilterDrawer.less';

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
				['red', '#DD614A'],
				['blue', '#0E6BA8'],
				['gray', '#9E978E'],
				['green', '#B3D16E'],
				['purple', '#9EA5D6'],
				['white', '#EEF4D4'],
				['yellow', '#EFEC83'],
			],
			locationMethodOptions: [['G', 'GPS'], ['L', 'LTE'], ['B', 'GPS + LTE']],
		},
	};

	render() {
		return (
			<div>
				<Drawer
					placement="right"
					closable={false}
					onClose={this.props.toggleDrawer}
					visible={this.props.drawerVisible}
					width="300px"
				>
					<Icon
						className="x-icon"
						type="close"
						onClick={this.props.toggleDrawer}
					/>
					<EditTrackerForm
						deerStates={this.props.deerStates}
						updateState={this.props.updateState}
						finishedLoading={this.props.finishedLoading}
						options={this.props.optionsList}
						deleteDeerFromDeerStates={this.props.deleteDeerFromDeerStates}
					/>
					<AddTrackerForm
						options={this.props.optionsList}
						addDeerToDeerStates={this.props.addDeerToDeerStates}
						toggleDrawer={this.props.toggleDrawer}
					/>
				</Drawer>
			</div>
		);
	}
}

export default FilterDrawer;
