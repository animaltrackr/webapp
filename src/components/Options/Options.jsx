import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Spin from 'antd/lib/spin';
import Icon from 'antd/lib/icon';
import Typography from 'antd/lib/typography';
import Select from 'antd/lib/select';

import './Options.less';

const { Text } = Typography;
const { Option } = Select;

class Options extends Component {
	onStatusChange = (deer, value) => {
		this.props.onStateChange(deer, value, this.props.type);
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
									: this.props.options[0][1]
							}
							onChange={this.onStatusChange.bind(this, this.props.deer)}
						>
							{this.props.options.map(key => {
								return <Option value={key[0]}>{key[1]}</Option>;
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
