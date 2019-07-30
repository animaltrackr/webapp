import React, { Component } from 'react';
import Input from 'antd/lib/input';
import Typography from 'antd/lib/typography';
import Spin from 'antd/lib/spin';
import Icon from 'antd/lib/icon';
import Button from 'antd/lib/button';
import { Divider } from 'antd';

import * as api from '../../modules/api';

import Options from '../Options/Options';
import MaxErrorInput from '../MaxErrorInput/MaxErrorInput';

import './AddTrackerForm.less';

const { Text, Title } = Typography;

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
		} else if (type === 'location_method') {
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

	handleClear = () => {
		this.setState({
			name: '',
			status: '',
			colour: '',
			max_error_radius: 0,
			location_method: '',
		});
	};

	onMaxErrorRadiusChange = value => {
		this.setState({ max_error_radius: value });
	};

	render() {
		const loadingIcon = <Icon type="loading" style={{ fontSize: 20 }} spin />;

		return (
			<div className="tracker-form">
				<Title level={4}>Add New Tracker</Title>
				<Divider />
				<div className="input">
					<div className="input-title-wrapper">
						<Text strong>Name:</Text>
						<div className="input-wrapper">
							<Input onChange={this.onNameChange} placeholder="Enter Name" />
						</div>
					</div>
					<Options
						onStateChange={this.onStateChange}
						title="Status"
						options={this.props.options.statusOptions}
						type="status"
					/>
					<Options
						onStateChange={this.onStateChange}
						title="Colour"
						options={this.props.options.colourOptions}
						type="colour"
					/>
					<Options
						onStateChange={this.onStateChange}
						title="Location Method"
						options={this.props.options.locationMethodOptions}
						type="location_method"
					/>
					<Text>Maximum Error Radius:</Text>
					<MaxErrorInput
						onMaxErrorRadiusChange={this.onMaxErrorRadiusChange}
						maxErrorRadius={this.state.max_error_radius}
					/>
				</div>
				<div className="button-wrapper">
					<div className="submit-button">
						<Button type="primary" onClick={this.handleSubmit}>
							Submit
						</Button>
					</div>
					<Button type="secondary" onClick={this.handleClear}>
						Clear
					</Button>
				</div>
			</div>
		);
	}
}

AddTrackerForm.propTypes = {};

export default AddTrackerForm;
