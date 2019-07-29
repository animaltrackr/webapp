import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Select } from 'antd';

const { Option } = Select;

class DeerSelector extends Component {
	render() {
		const { deerStates, toggleDeer, loading } = this.props;
		const selectedDeer = deerStates
			.filter(deer => deer.visible)
			.map(deer => deer.id);

		return (
			<Select
				mode="multiple"
				style={{ width: '100%' }}
				placeholder="Deer to Display"
				value={selectedDeer}
				onSelect={toggleDeer}
				onDeselect={toggleDeer}
				disabled={loading}
			>
				{this.props.deerStates
					? this.props.deerStates.map(deer => {
							return <Option key={deer.id}>{deer.name}</Option>;
					  })
					: null}
			</Select>
		);
	}
}

DeerSelector.propTypes = {
	deerStates: PropTypes.arrayOf(PropTypes.object).isRequired,
	toggleDeer: PropTypes.func.isRequired,
	loading: PropTypes.bool.isRequired,
};

export default DeerSelector;
