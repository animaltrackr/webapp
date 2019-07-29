import React, { Component } from 'react';
import Typography from 'antd/lib/typography';
import Select from 'antd/lib/select';

import * as api from '../../modules/api';

import './EditTrackerForm.less';

const { Paragraph } = Typography;
const { Option } = Select;

class EditTrackerForm extends Component {
	onColourChange = (index, value) => {
		this.props.deerStates[index]['colour'] = value;
	};

	onStateChange = (index, value, status) => {
		console.log(status === true);

		status
			? (this.props.deerStates[index]['status'] = value)
			: this.props.updateName(index, value);

		const updatePromise = api.updateTracker(
			this.props.deerStates[index]['id'],
			{
				id: this.props.deerStates[index]['id'],
				animal_id: !status ? value : this.props.deerStates[index]['name'],
				status: status ? value : this.props.deerStates[index]['status'],
				max_error_radius: this.props.deerStates[index]['max_error_radius'],
				location_method: this.props.deerStates[index]['location_method'],
				tracks: this.props.deerStates[index]['tracks'],
			}
		);
		Promise.all([updatePromise]).then(values => {});
	};

	onStatusChange = (index, value) => {
		this.onStateChange(index, value, true);
	};

	onNameChange = (index, value) => {
		this.onStateChange(index, value, false);
	};

	render() {
		return (
			<div>
				{this.props.deerStates
					? this.props.deerStates.map((deer, index) => {
							if (deer['visible']) {
								return (
									<div className="tracker-form">
										<Paragraph
											editable={{
												onChange: this.onNameChange.bind(this, index),
											}}
											strong={true}
										>
											{deer['name']}
										</Paragraph>
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
										</div>
										<div className="option">
											<Paragraph>Status: </Paragraph>
											<Select
												defaultValue={deer['status']}
												onChange={this.onStatusChange.bind(this, index)}
											>
												<Option value={'A'}>Active</Option>
												<Option value={'D'}>Disabled</Option>
												<Option value={'R'}>Retired</Option>
												<Option value={'U'}>Unresponsive</Option>
												<Option value={'X'}>Unused</Option>
											</Select>
										</div>
									</div>
								);
							}
					  })
					: ''}
			</div>
		);
	}
}

EditTrackerForm.propTypes = {};

export default EditTrackerForm;
