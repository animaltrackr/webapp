import React from 'react';
import { shallow } from 'enzyme';
import SampleComponent from './SampleComponent';

describe('<SampleComponent />', () => {
	test('renders', () => {
		const wrapper = shallow(<SampleComponent />);
		expect(wrapper).toMatchSnapshot();
	});
});
