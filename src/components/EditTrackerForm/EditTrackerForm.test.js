import React from 'react';
import { shallow } from 'enzyme';
import EditTrackerForm from './EditTrackerForm';

describe('<EditTrackerForm />', () => {
	test('renders', () => {
		const wrapper = shallow(<EditTrackerForm />);
		expect(wrapper).toMatchSnapshot();
	});
});
