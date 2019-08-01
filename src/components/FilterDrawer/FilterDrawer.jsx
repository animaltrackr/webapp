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
