import React, { Component } from 'react';
import Typography from 'antd/lib/typography';
import Select from 'antd/lib/select';
import Spin from 'antd/lib/spin';
import Icon from 'antd/lib/icon';

import './ColourOptions.less';

const { Text } = Typography;
const { Option } = Select;

class ColourOptions extends Component {
	onColourChange = (deer, value) => {
		this.props.onStateChange(deer, value, 'colour');
	};

	render() {
		const loadingIcon = <Icon type="loading" style={{ fontSize: 20 }} spin />;

		return (
			<div className="option">
				<Text className="option-title">Colour:</Text>
				<Select
					defaultValue={this.props.deer ? this.props.deer.colour : ''}
					onChange={this.onColourChange.bind(this, this.props.deer)}
				>
					<Option value={'blue'}>blue</Option>
					<Option value={'gray'}>gray</Option>
					<Option value={'green'}>green</Option>
					<Option value={'purple'}>purple</Option>
					<Option value={'red'}>red</Option>
					<Option value={'white'}>white</Option>
					<Option value={'yellow'}>yellow</Option>
				</Select>
				<div
					className="spin-icon"
					hidden={this.props.deer ? !this.props.deer.loading.colour : true}
				>
					<Spin indicator={loadingIcon} />
				</div>
			</div>
		);
	}
}

ColourOptions.propTypes = {};

export default ColourOptions;
