import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Icon } from 'antd';
import './ControlCard.less';

import DeerSelector from '../DeerSelector';
import DateRangeForm from '../DateRangeForm';

class ControlCard extends Component {
	render() {
		return (
			<Card className="control-card" bodyStyle={{ padding: '0px' }}>
				<div className="control-section">
					<div className="selector-row">
						<DeerSelector
							deerStates={this.props.deerStates}
							toggleDeer={this.props.toggleDeer}
							loading={this.props.loading}
						/>
						<Icon
							className="control-icon"
							type={`eye${this.props.showAll ? '-invisible' : ''}`}
							onClick={this.props.toggleAllDeer}
						/>
					</div>
					<div className="filter-row">
						<Icon
							className={`control-icon${
								this.props.dateFilterVisible ? '-active' : ''
							}`}
							type="calendar"
							onClick={this.props.toggleDateFilter}
						/>
					</div>
				</div>
				<div
					className={`secondary-section${
						this.props.dateFilterVisible ? '' : '-hidden'
					}`}
				>
					<Card
						className="secondary-card"
						bodyStyle={{ padding: '5px', margin: '5px' }}
					>
						<DateRangeForm
							handleDateFilter={this.props.handleDateFilter}
							handleDrawer={this.props.toggleDateFilter}
						/>
					</Card>
				</div>
			</Card>
		);
	}
}

ControlCard.propTypes = {
	deerStates: PropTypes.arrayOf(PropTypes.object).isRequired,
	showAll: PropTypes.bool.isRequired,
	dateFilterVisible: PropTypes.bool.isRequired,
	toggleDateFilter: PropTypes.func.isRequired,
	toggleDeer: PropTypes.func.isRequired,
	toggleAllDeer: PropTypes.func.isRequired,
	handleDateFilter: PropTypes.func.isRequired,
	loading: PropTypes.bool.isRequired,
};

export default ControlCard;
