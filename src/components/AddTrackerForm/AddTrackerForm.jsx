import React, { Component } from 'react';

import { Divider, Typography, Button, Icon, Spin, Input } from 'antd';

import * as api from 'modules/api';

import Options from '../Options/Options';
import MaxErrorInput from '../MaxErrorInput/MaxErrorInput';

import './AddTrackerForm.less';

const { Text, Title } = Typography;

class AddTrackerForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			status: this.props.option ? this.props.options.statusOptions[0][0] : 'A',
			colour: this.props.option
				? this.props.options.colourOptions[0][0]
				: 'red',
			max_error_radius: 0,
			location_method: this.props.options
				? this.props.options.locationMethodOptions[0][0]
				: 'G',
			isLoading: false,
		};
	}

	onNameChange = e => {
		this.setState({ name: e.target.value });
	};

	onStateChange = (value, type) => {
		if (type === 'colour') {
			this.setState({ colour: value });
		} else if (type === 'status') {
			this.setState({ status: value });
		} else if (type === 'location_method') {
			this.setState({ location_method: value });
		}
	};

	createNewDeer = id => {
		const newDeer = {
			name: this.state.name,
			id: id,
			status: this.state.status,
			visible: false,
			colour: this.state.colour,
			points: [],
			max_error_radius: this.state.max_error_radius,
			location_method: this.state.location_method,
			loading: {
				status: false,
				name: false,
				colour: false,
				location_method: false,
				max_error_radius: false,
			},
		};
		this.props.addDeerToDeerStates(newDeer);
	};

	handleSubmit = () => {
		this.setState({ isLoading: true });

		api
			.createTracker({
				animal_id: this.state.name,
				status: this.state.status,
				max_error_radius: this.state.max_error_radius,
				location_method: this.state.location_method,
			})
			.then(values => {
				this.createNewDeer(values.id);
				this.handleClear();
				this.props.toggleDrawer();
			});
	};

	handleClear = () => {
		this.setState(
			{
				name: '',
				status: this.props.options.statusOptions[0][0],
				colour: this.props.options.colourOptions[0][0],
				max_error_radius: 0,
				location_method: this.props.options.locationMethodOptions[0][0],
			},
			() => this.setState({ isLoading: false })
		);
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
							<Input
								allowClear
								onChange={this.onNameChange}
								placeholder="Enter Name"
							/>
						</div>
					</div>
					<Options
						onStateChange={this.onStateChange}
						title="Status"
						options={this.props.options ? this.props.options.statusOptions : ''}
						default={this.state.status}
						type="status"
					/>
					<Options
						onStateChange={this.onStateChange}
						title="Colour"
						options={this.props.options ? this.props.options.colourOptions : ''}
						default={this.state.colour}
						type="colour"
					/>
					<Options
						onStateChange={this.onStateChange}
						title="Location Method"
						options={
							this.props.options ? this.props.options.locationMethodOptions : ''
						}
						default={this.state.location_method}
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
						<div className="spin-icon-wrapper">
							<Spin indicator={loadingIcon} hidden={!this.state.isLoading} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

AddTrackerForm.propTypes = {};

export default AddTrackerForm;
