import React, { Component } from 'react';
import Typography from 'antd/lib/typography';
import Divider from 'antd/lib/divider';

import { PropTypes } from 'prop-types';

import * as api from '../../modules/api';

import Options from '../Options/Options';
import MaxErrorInput from '../MaxErrorInput/MaxErrorInput';

import './EditTrackerForm.less';

const { Text, Title } = Typography;

class EditTrackerForm extends Component {
	onStateChange = (value, type, deer) => {
		this.props.updateState(deer, value, type);

		if (type !== 'colour') {
			api
				.updateTracker(deer.id, {
					id: deer.id,
					animal_id: type === 'name' ? value : deer.id,
					status: type === 'status' ? value : deer.status,
					max_error_radius: type === 'maxError' ? value : deer.max_error_radius,
					location_method:
						type === 'location_method' ? value : deer.location_method,
					tracks: deer.tracks,
				})
				.then(values => {
					return this.props.finishedLoading(deer, type);
				});
		} else {
			this.props.finishedLoading(deer, type);
		}
	};

	onNameChange = (deer, value) => {
		this.onStateChange(deer, value, 'name');
	};

	onMaxErrorRadiusChange = (deer, value) => {
		this.onStateChange(deer, value, 'maxError');
	};

	render() {
		var isDeerActive;

		this.props.deerStates
			? this.props.deerStates.map(deer => {
					if (deer.visible) {
						isDeerActive = true;
						return 1;
					}
					return 0;
			  })
			: (isDeerActive = false);

		return (
			<div>
				{isDeerActive ? (
					<div>
						<Title level={4}>Edit Tracker</Title>
						<Divider />
					</div>
				) : (
					''
				)}
				{this.props.deerStates
					? this.props.deerStates.map((deer, index) => {
							if (deer.visible) {
								return (
									<div className="tracker-form">
										<div className="option-name">
											<Text
												editable={{
													onChange: this.onNameChange.bind(this, deer),
												}}
												strong={true}
											>
												{deer.name}
											</Text>
										</div>
										<Options
											onStateChange={this.onStateChange}
											title="Colour"
											options={this.props.options.colourOptions}
											type="colour"
											deer={deer}
										/>
										<Options
											onStateChange={this.onStateChange}
											title="Status"
											options={this.props.options.statusOptions}
											type="status"
											deer={deer}
										/>

										<Options
											onStateChange={this.onStateChange}
											title="Location Method"
											options={this.props.options.locationMethodOptions}
											type="location_method"
											deer={deer}
										/>
										<Text>Maximum Error Radius:</Text>
										<MaxErrorInput
											onMaxErrorRadiusChange={this.onMaxErrorRadiusChange.bind(
												this,
												deer
											)}
											maxError={deer.max_error_radius}
											loading={deer.loading.max_error_radius}
										/>
										<Divider />
									</div>
								);
							}
							return '';
					  })
					: ''}
			</div>
		);
	}
}

EditTrackerForm.propTypes = {
	deer: PropTypes.array,
	index: PropTypes.number,
	optionsLists: PropTypes.array,
	max_error_radius: PropTypes.number,
};

export default EditTrackerForm;
