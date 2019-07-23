import React from 'react';
import { shallow } from 'enzyme';
import Tracking from './Tracking';

describe('<Tracking />', () => {
	test('renders', () => {
		const wrapper = shallow(<Tracking />);
		expect(wrapper).toMatchSnapshot();
	});
});
