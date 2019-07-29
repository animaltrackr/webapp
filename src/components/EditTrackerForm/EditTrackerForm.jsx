import React, { Component } from 'react';
import Spin from 'antd/lib/spin';
import Icon from 'antd/lib/icon';
import Typography from 'antd/lib/typography';
import { PropTypes } from 'prop-types';

import * as api from '../../modules/api';

import ColourOptions from '../ColourOptions/ColourOptions';
import StatusOptions from '../StatusOptions/StatusOptions';

import './EditTrackerForm.less';

const { Paragraph } = Typography;

class EditTrackerForm extends Component {
	onStateChange = (index, value, type) => {
		this.props.updateState(index, value, type);

		if (type !== 'colour') {
			const updatePromise = api.updateTracker(
				this.props.deerStates[index]['id'],
				{
					id: this.props.deerStates[index]['id'],
					animal_id:
						type === 'name' ? value : this.props.deerStates[index]['name'],
					status:
						type === 'status' ? value : this.props.deerStates[index]['status'],
					max_error_radius: this.props.deerStates[index]['max_error_radius'],
					location_method: this.props.deerStates[index]['location_method'],
					tracks: this.props.deerStates[index]['tracks'],
				}
			);
			Promise.all([updatePromise]).then(values => {
				return this.props.finishedLoading(index, type);
			});
		} else {
			this.props.finishedLoading(index, type);
		}
	};

	onNameChange = (index, value) => {
		this.onStateChange(index, value, 'name');
	};

	render() {
		const antIcon = <Icon type="loading" style={{ fontSize: 20 }} spin />;

		return (
			<div>
				{this.props.deerStates
					? this.props.deerStates.map((deer, index) => {
							if (deer['visible']) {
								return (
									<div className="tracker-form">
										<div className="option-name">
											<Paragraph
												editable={{
													onChange: this.onNameChange.bind(this, index),
												}}
												strong={true}
											>
												{deer['name']}
											</Paragraph>
											<div className="spin-icon" hidden={!deer.loading.name}>
												<Spin indicator={antIcon} />
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
