import React, { Component } from 'react';
import Input from 'antd/lib/input';
import Typography from 'antd/lib/typography';
import Spin from 'antd/lib/spin';
import Icon from 'antd/lib/icon';
import Button from 'antd/lib/button';

import * as api from '../../modules/api';

import Options from '../Options/Options';
import MaxErrorInput from '../MaxErrorInput/MaxErrorInput';

const { Text } = Typography;

class AddTrackerForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			status: '',
			colour: '',
			max_error_radius: 0,
			location_method: '',
		};
	}

	onNameChange = e => {
		this.setState({ name: e.target.value });
	};

	onStateChange = (value, type) => {
		if (type === 'colour') {
			console.log(value);
			this.setState({ colour: value });
		} else if (type === 'status') {
			console.log(value);
			this.setState({ status: value });
		} else if (type === 'locationMethod') {
			console.log(value);
			this.setState({ location_method: value });
		}
	};

	handleSubmit = () => {
		api.createTracker({
			animal_id: this.state.name,
			status: this.state.status,
			max_error_radius: this.state.max_error_radius,
			location_method: this.state.location_method,
		});
	};

	onMaxErrorRadiusChange = value => {
		this.setState({ max_error_radius: value });
	};

	render() {
		const loadingIcon = <Icon type="loading" style={{ fontSize: 20 }} spin />;

		const optionsList = {
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
		};

		return (
			<div className="add-form">
				<div className="input">
					<Text strong>Tracker Name:</Text>
					<Input onChange={this.onNameChange} placeholder="Enter Name" />
					<Options
						onStateChange={this.onStateChange}
						title="Status"
						options={optionsList.statusOptions}
						type="status"
					/>
					<Options
						onStateChange={this.onStateChange}
						title="Colour"
						options={optionsList.colourOptions}
						type="colour"
					/>
					<Options
						onStateChange={this.onStateChange}
						title="Location Method"
						options={optionsList.locationMethodOptions}
						type="locationMethod"
					/>
					<Text>Enter Maximum Error Radius:</Text>
					<MaxErrorInput
						onMaxErrorRadiusChange={this.onMaxErrorRadiusChange}
						maxErrorRadius={this.state.max_error_radius}
					/>
				</div>
				<Button type="primary" onClick={this.handleSubmit}>
					Submit
				</Button>
			</div>
		);
	}
}

AddTrackerForm.propTypes = {};

export default AddTrackerForm;
