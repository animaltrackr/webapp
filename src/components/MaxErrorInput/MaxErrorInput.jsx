import React, { Component } from 'react';
import Spin from 'antd/lib/spin';
import Icon from 'antd/lib/icon';
import { Slider, InputNumber, Row, Col } from 'antd';

class MaxErrorInput extends Component {
	state = {
		inputValue: this.props.maxError ? this.props.maxError : 0,
	};

	onChange = value => {
		this.props.onMaxErrorRadiusChange(value);
		this.setState({
			inputValue: value,
		});
	};
	render() {
		const loadingIcon = <Icon type="loading" style={{ fontSize: 20 }} spin />;

		const { inputValue } = this.state;
		return (
			<Row>
				<Col span={12}>
					<Slider
						min={0}
						max={100}
						onChange={this.onChange}
						value={inputValue}
					/>
				</Col>
				<Col span={4}>
					<InputNumber
						min={0}
						max={100}
						style={{ marginLeft: 16 }}
						value={inputValue}
						onChange={this.onChange}
					/>
				</Col>
				<Col>
					<Spin
						indicator={loadingIcon}
						hidden={this.props.loading ? !this.props.loading : true}
					/>
				</Col>
			</Row>
		);
	}
}

MaxErrorInput.propTypes = {};

export default MaxErrorInput;
