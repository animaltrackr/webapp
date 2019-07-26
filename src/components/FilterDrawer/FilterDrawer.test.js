import React from 'react';
import { shallow } from 'enzyme';
import FilterDrawer from './FilterDrawer';

describe('<FilterDrawer />', () => {
	test('renders', () => {
		const wrapper = shallow(<FilterDrawer />);
		expect(wrapper).toMatchSnapshot();
	});
});
