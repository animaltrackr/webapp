import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typography, Card, Button, Form } from 'antd';
import './ControlCard.less';

import DeerSelector from '../DeerSelector';
import DateRangeForm from '../DateRangeForm';

const { Text } = Typography;

class ControlCard extends Component {
	render() {
		return (
			<Card className="control-card" bodyStyle={{ padding: '10px' }}>
				<div className="control-section">
					<Text strong>Selected Deer</Text>
					<Form.Item>
						<DeerSelector
							deerStates={this.props.deerStates}
							toggleDeer={this.props.toggleDeer}
						/>
					</Form.Item>
					<Button type="text" onClick={this.props.toggleAllDeer}>
						Toggle All
					</Button>
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
	toggleAllDeer: PropTypes.func.isRequired,
	handleDateFilter: PropTypes.func.isRequired,
	handleDrawer: PropTypes.func.isRequired,
};

export default ControlCard;
