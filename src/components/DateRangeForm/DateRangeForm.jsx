import React from 'react';
import PropTypes from 'prop-types';

import { Form, Button, DatePicker } from 'antd';
import './DateRangeForm.less';

class DateRangeForm extends React.Component {
	handleSubmit = e => {
		e.preventDefault();

		this.props.form.validateFields((err, fieldsValue) => {
			if (err) {
				console.log('error????', err);
				return;
			}
			console.log(fieldsValue);
			// Should format date value before submit.
			const startDate = fieldsValue['date-time-picker-start']
				? Date(fieldsValue['date-time-picker-start'])
				: Date(1990);
			const endDate = fieldsValue['date-time-picker-end']
				? Date(fieldsValue['date-time-picker-end'])
				: Date();

			const values = {
				...fieldsValue,
				'date-time-picker-start': startDate.format('YYYY-MM-DDTHH:mm:ss'),
				'date-time-picker-end': endDate.format('YYYY-MM-DDTHH:mm:ss'),
			};
			this.props.handleDateFilter(values);
			this.props.handleDrawer(e);
		});
	};

	handleClear = e => {
		this.props.form.resetFields();
		this.props.handleDateFilter(null);
		this.props.handleDrawer(e);
	};

	render() {
		const { getFieldDecorator } = this.props.form;

		return (
			<div className="form-wrapper">
				<Form onSubmit={this.handleSubmit}>
					<div className="date-wrapper">
						<Form.Item>
							{getFieldDecorator('date-time-picker-start', {})(
								<DatePicker
									className="date-picker"
									placeholder="Start Date"
									showTime
									format="YYYY-MM-DD HH:mm:ss"
								/>
							)}
						</Form.Item>
						<Form.Item>
							{getFieldDecorator('date-time-picker-end', {})(
								<DatePicker
									className="date-picker"
									placeholder="End Date"
									showTime
									format="YYYY-MM-DD HH:mm:ss"
								/>
							)}
						</Form.Item>
					</div>
					<div className="button-wrapper">
						<Button type="primary" htmlType="submit">
							Save
						</Button>
						<Button type="default" onClick={this.handleClear}>
							Clear Filters
						</Button>
					</div>
				</Form>
			</div>
		);
	}
}

const WrappedTimeRelatedForm = Form.create({ name: 'time_related_controls' })(
	DateRangeForm
);

WrappedTimeRelatedForm.propTypes = {
	handleDateFilter: PropTypes.func.isRequired,
	handleDrawer: PropTypes.func.isRequired,
};

export default WrappedTimeRelatedForm;
