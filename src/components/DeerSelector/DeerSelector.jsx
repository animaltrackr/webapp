import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Select } from 'antd';

const { Option } = Select;

class DeerSelector extends Component {
	render() {
		const { deerStates, toggleDeer } = this.props;
		const selectedDeer = deerStates
			.filter(deer => deer.visible)
			.map(deer => deer.id);

		return (
			<Select
				mode="multiple"
				style={{ width: '100%' }}
				placeholder="Deer to Display"
				defaultValue={selectedDeer}
				onChange={toggleDeer}
			>
				{this.props.deerStates
					? this.props.deerStates.map(deer => {
							return (
								<Option key={deer.id} onClick={this.props.toggleDeer}>
									{deer.name}
								</Option>
							);
					  })
					: null}
			</Select>
		);
	}
}

DeerSelector.propTypes = {
	deerStates: PropTypes.arrayOf(PropTypes.object).isRequired,
	toggleDeer: PropTypes.func.isRequired,
};

export default DeerSelector;
