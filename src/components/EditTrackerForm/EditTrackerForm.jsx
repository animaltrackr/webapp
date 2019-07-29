import React, { Component } from 'react';
import Spin from 'antd/lib/spin';
import Icon from 'antd/lib/icon';
import Typography from 'antd/lib/typography';
import Divider from 'antd/lib/divider';

import { PropTypes } from 'prop-types';

import * as api from '../../modules/api';

import ColourOptions from '../ColourOptions/ColourOptions';
import StatusOptions from '../StatusOptions/StatusOptions';

import './EditTrackerForm.less';

const { Text } = Typography;

class EditTrackerForm extends Component {
	onStateChange = (deer, value, type) => {
		this.props.updateState(deer, value, type);

		if (type !== 'colour') {
			const updatePromise = api.updateTracker(deer.id, {
				id: deer.id,
				animal_id: type === 'name' ? value : deer.id,
				status: type === 'status' ? value : deer.status,
				max_error_radius: deer.max_error_radius,
				location_method: deer.location_method,
				tracks: deer.tracks,
			});
			Promise.all([updatePromise]).then(values => {
				return this.props.finishedLoading(deer, type);
			});
		} else {
			this.props.finishedLoading(deer, type);
		}
	};

	onNameChange = (deer, value) => {
		this.onStateChange(deer, value, 'name');
	};

	render() {
		const loadingIcon = <Icon type="loading" style={{ fontSize: 20 }} spin />;

		return (
			<div>
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
											<div className="spin-icon" hidden={!deer.loading.name}>
												<Spin indicator={loadingIcon} />
											</div>
										</div>
										<ColourOptions
											onStateChange={this.onStateChange}
											deer={deer}
											index={index}
										/>
										<StatusOptions
											onStateChange={this.onStateChange}
											deer={deer}
											index={index}
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
};

export default EditTrackerForm;
