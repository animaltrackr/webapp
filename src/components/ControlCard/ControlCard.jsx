import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu, Typography, Card } from 'antd';
import './ControlCard.less';

import DeerSelector from '../DeerSelector';
import DateRangeForm from '../DateRangeForm';

const { Text } = Typography;

class ControlCard extends Component {
	render() {
		return (
			<Card className="control-card">
				<div className="control-section">
					<Text strong>Selected Deer</Text>
					<DeerSelector
						deerStates={this.props.deerStates}
						toggleDeer={this.props.toggleDeer}
					/>
				</div>
				<div className="control-section">
					<Text strong>Filter Deer</Text>
					<DateRangeForm
						handleDateFilter={this.props.handleDateFilter}
						handleDrawer={this.props.toggleDrawer}
					/>
				</div>
			</Card>
		);
	}
}

ControlCard.propTypes = {
	deerStates: PropTypes.arrayOf(PropTypes.object).isRequired,
	toggleDeer: PropTypes.func.isRequired,
};

export default ControlCard;
