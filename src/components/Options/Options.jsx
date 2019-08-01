import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Spin, Icon, Typography, Select } from 'antd';

import './Options.less';

const { Text } = Typography;
const { Option } = Select;

class Options extends Component {
	onStatusChange = (deer, value) => {
		this.props.onStateChange(value, this.props.type, deer);
	};

	render() {
		const loadingIcon = <Icon type="loading" style={{ fontSize: 20 }} spin />;

		return (
			<div className="option">
				<div className="option-type">
					<div className="input-wrapper">
						<Text className="option-title">{this.props.title + ':'}</Text>
						<Select
							defaultValue={
								this.props.deer
									? this.props.deer[this.props.type]
									: this.props.default
							}
							onChange={this.onStatusChange.bind(this, this.props.deer)}
						>
							{console.log(this.props.options)}
							{this.props.options.map(key => {
								return <Option value={key[1]}>{key[0]}</Option>;
							})}
						</Select>
					</div>
					<div
						className="spin-icon"
						hidden={
							this.props.deer ? !this.props.deer.loading[this.props.type] : true
						}
					>
						<Spin indicator={loadingIcon} />
					</div>
				</div>
			</div>
		);
	}
}

Options.propTypes = {
	type: PropTypes.string,
	deer: PropTypes.array,
	options: PropTypes.array,
};

export default Options;
