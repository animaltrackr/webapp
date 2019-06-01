import React from 'react';
import { storiesOf } from '@storybook/react';
import SampleComponent from './SampleComponent';

storiesOf('SampleComponent', module).add('SampleComponent', () => (
	<div>
		<SampleComponent />
	</div>
));
