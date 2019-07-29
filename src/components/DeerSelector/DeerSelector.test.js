import React from 'react';
import { shallow } from 'enzyme';
import { deerStates } from 'modules/stateMocks';
import DeerSelector from './DeerSelector';

describe('<DeerSelector />', () => {
	test('renders', () => {
		const wrapper = shallow(<DeerSelector deerStates={deerStates} />);
		expect(wrapper).toMatchSnapshot();
	});
});
