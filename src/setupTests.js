/* eslint-disable import/no-extraneous-dependencies */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import apiMock from 'modules/api.mock';

configure({ adapter: new Adapter() });

apiMock();
