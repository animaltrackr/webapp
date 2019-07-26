import React from 'react';
import { shallow } from 'enzyme';
import DateRangeForm from './DateRangeForm';

describe('<DateRangeForm />', () => {
	test('renders', () => {
		const wrapper = shallow(<DateRangeForm />);
		expect(wrapper).toMatchSnapshot();
	});
});
