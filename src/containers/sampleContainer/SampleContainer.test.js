import React from 'react';
import { shallow } from 'enzyme';
import SampleContainer from './SampleContainer';

describe('<SampleContainer />', () => {
	test('renders', () => {
		const wrapper = shallow(<SampleContainer />);
		expect(wrapper).toMatchSnapshot();
	});
});
