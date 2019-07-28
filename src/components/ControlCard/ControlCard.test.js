import React from 'react';
import { shallow } from 'enzyme';
import ControlCard from './ControlCard';

describe('<ControlCard />', () => {
	test('renders', () => {
		const wrapper = shallow(<ControlCard />);
		expect(wrapper).toMatchSnapshot();
	});
});
