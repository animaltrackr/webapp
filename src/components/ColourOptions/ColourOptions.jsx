import React, { Component } from 'react';
import Typography from 'antd/lib/typography';
import Select from 'antd/lib/select';
import Spin from 'antd/lib/spin';
import Icon from 'antd/lib/icon';

import './ColourOptions.less';

const { Paragraph } = Typography;
const { Option } = Select;

class ColourOptions extends Component {
	onColourChange = (index, value) => {
		this.props.onStateChange(index, value, 'colour');
	};

	render() {
		const antIcon = <Icon type="loading" style={{ fontSize: 20 }} spin />;

		return (
			<div className="option">
				<Paragraph>Colour: </Paragraph>
				<Select
					className="select"
					defaultValue={this.props.deer ? this.props.deer['colour'] : ''}
					onChange={this.onColourChange.bind(this, this.props.index)}
				>
					<Option value={'red'}>red</Option>
					<Option value={'blue'}>blue</Option>
					<Option value={'white'}>white</Option>
					<Option value={'green'}>green</Option>
				</Select>
				<div
					className="spin-icon"
					hidden={this.props.deer ? !this.props.deer.loading.colour : true}
				>
					<Spin indicator={antIcon} />
				</div>
			</div>
		);
	}
}

ColourOptions.propTypes = {};

export default ColourOptions;
