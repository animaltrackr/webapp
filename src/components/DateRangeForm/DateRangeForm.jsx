import React from 'react';

import Form from 'antd/lib/form';
import Button from 'antd/lib/button';
import DatePicker from 'antd/lib/date-picker';

class DateRangeForm extends React.Component {
	handleSubmit = e => {
		e.preventDefault();

		this.props.form.validateFields((err, fieldsValue) => {
			if (err) {
				console.log('error????');
				return;
			}
			// Should format date value before submit.
			const values = {
				...fieldsValue,
				'date-time-picker-start': fieldsValue['date-time-picker-start'].format(
					'YYYY-MM-DDTHH:mm:ss'
				),
				'date-time-picker-end': fieldsValue['date-time-picker-end'].format(
					'YYYY-MM-DDTHH:mm:ss'
				),
			};
			this.props.handleDateFilter(values);
			this.props.handleDrawer(e);
		});
	};

	handleClear = e => {
		this.props.handleDateFilter(null);
		this.props.handleDrawer(e);
	};

	render() {
		const { getFieldDecorator } = this.props.form;
		const formItemLayout = {
			labelCol: {
				xs: { span: 24 },
				sm: { span: 8 },
			},
			wrapperCol: {
				xs: { span: 24 },
				sm: { span: 16 },
			},
		};
		const config = {
			rules: [
				{ type: 'object', required: true, message: 'Please select date!' },
			],
		};
		return (
			<Form {...formItemLayout} onSubmit={this.handleSubmit}>
				<Form.Item label="Start Date">
					{getFieldDecorator('date-time-picker-start', config)(
						<DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
					)}
				</Form.Item>
				<Form.Item label="End Date">
					{getFieldDecorator('date-time-picker-end', config)(
						<DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
					)}
				</Form.Item>
				<Form.Item
					wrapperCol={{
						xs: { span: 24, offset: 0 },
						sm: { span: 16, offset: 8 },
					}}
				>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
					<Button type="default" onClick={this.handleClear}>
						Clear Filters
					</Button>
				</Form.Item>
			</Form>
		);
	}
}
const WrappedTimeRelatedForm = Form.create({ name: 'time_related_controls' })(
	DateRangeForm
);

export default WrappedTimeRelatedForm;
