import React from 'react';
import { shallow } from 'enzyme';
import ColourOptions from './ColourOptions';

describe('<ColourOptions />', () => {
	test('renders', () => {
		const wrapper = shallow(<ColourOptions />);
		expect(wrapper).toMatchSnapshot();
	});
});
