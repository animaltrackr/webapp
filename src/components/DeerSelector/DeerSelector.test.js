import React from 'react';
import { shallow } from 'enzyme';
import DeerSelector from './DeerSelector';

describe('<DeerSelector />', () => {
	test('renders', () => {
		const wrapper = shallow(<DeerSelector />);
		expect(wrapper).toMatchSnapshot();
	});
});
