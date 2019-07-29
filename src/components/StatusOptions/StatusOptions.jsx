import React, { Component } from 'react';
import Typography from 'antd/lib/typography';
import Select from 'antd/lib/select';
import Spin from 'antd/lib/spin';
import Icon from 'antd/lib/icon';

import './StatusOptions.less';

const { Text } = Typography;
const { Option } = Select;

class StatusOptions extends Component {
	onStatusChange = (deer, value) => {
		this.props.onStateChange(deer, value, 'status');
	};

	render() {
		const loadingIcon = <Icon type="loading" style={{ fontSize: 20 }} spin />;

		return (
			<div className="option">
				<Text className="option-title">Status:</Text>
				<Select
					defaultValue={this.props.deer ? this.props.deer.status : ''}
					onChange={this.onStatusChange.bind(this, this.props.deer)}
				>
					<Option value={'A'}>Active</Option>
					<Option value={'D'}>Disabled</Option>
					<Option value={'R'}>Retired</Option>
					<Option value={'U'}>Unresponsive</Option>
					<Option value={'X'}>Unused</Option>
				</Select>
				<div
					className="spin-icon"
					hidden={this.props.deer ? !this.props.deer.loading.status : true}
				>
					<Spin indicator={loadingIcon} />
				</div>
			</div>
		);
	}
}

StatusOptions.propTypes = {};

export default StatusOptions;
