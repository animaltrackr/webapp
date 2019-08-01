import React from 'react';
import { shallow } from 'enzyme';
import MaxErrorInput from './MaxErrorInput';

describe('<MaxErrorInput />', () => {
	test('renders', () => {
		const wrapper = shallow(<MaxErrorInput />);
		expect(wrapper).toMatchSnapshot();
	});
});
