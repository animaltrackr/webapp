import React, { Component } from 'react';
import Typography from 'antd/lib/typography';
import Select from 'antd/lib/select';
import Spin from 'antd/lib/spin';
import Icon from 'antd/lib/icon';

import * as api from '../../modules/api';

import './EditTrackerForm.less';

const { Paragraph } = Typography;
const { Option } = Select;

class EditTrackerForm extends Component {
	onColourChange = (index, value) => {
		this.onStateChange(index, value, 'colour');
	};

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

	onStatusChange = (index, value) => {
		this.onStateChange(index, value, 'status');
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
										<div className="option">
											<Paragraph>Colour: </Paragraph>
											<Select
												defaultValue={deer['colour']}
												onChange={this.onColourChange.bind(this, index)}
											>
												<Option value={'red'}>red</Option>
												<Option value={'blue'}>blue</Option>
												<Option value={'white'}>white</Option>
												<Option value={'green'}>green</Option>
											</Select>
											<div className="spin-icon" hidden={!deer.loading.colour}>
												<Spin indicator={antIcon} />
											</div>
										</div>
										<div className="option">
											<Paragraph>Status: </Paragraph>
											<Select
												className="select"
												defaultValue={deer['status']}
												onChange={this.onStatusChange.bind(this, index)}
											>
												<Option value={'A'}>Active</Option>
												<Option value={'D'}>Disabled</Option>
												<Option value={'R'}>Retired</Option>
												<Option value={'U'}>Unresponsive</Option>
												<Option value={'X'}>Unused</Option>
											</Select>
											<div className="spin-icon" hidden={!deer.loading.status}>
												<Spin indicator={antIcon} />
											</div>
										</div>
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

EditTrackerForm.propTypes = {};

export default EditTrackerForm;
