import React from 'react';
import { shallow } from 'enzyme';
import AddTrackerForm from './AddTrackerForm';

describe('<AddTrackerForm />', () => {
	test('renders', () => {
		const wrapper = shallow(<AddTrackerForm />);
		expect(wrapper).toMatchSnapshot();
	});
});
