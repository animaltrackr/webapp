import React from 'react';
import { shallow } from 'enzyme';
import StatusOptions from './StatusOptions';

describe('<StatusOptions />', () => {
	test('renders', () => {
		const wrapper = shallow(<StatusOptions />);
		expect(wrapper).toMatchSnapshot();
	});
});
