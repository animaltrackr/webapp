import { deerStates } from 'modules/stateMocks';

export default function() {
	// eslint-disable-next-line global-require
	const api = require('modules/api');
	jest.mock('modules/api');

	api.createTracker.mockResolvedValue(new Promise(res => res({})));
	api.readTrackers.mockResolvedValue(new Promise(res => res(deerStates)));
	api.readTracker.mockResolvedValue(new Promise(res => res({})));
	api.updateTracker.mockResolvedValue(new Promise(res => res({})));
	api.deleteTracker.mockResolvedValue(new Promise(res => res({})));
	api.createPoint.mockResolvedValue(new Promise(res => res({})));
	api.readPoints.mockResolvedValue(new Promise(res => res([])));
	api.readPoint.mockResolvedValue(new Promise(res => res({})));
	api.updatePoint.mockResolvedValue(new Promise(res => res({})));
	api.deletePoint.mockResolvedValue(new Promise(res => res({})));
}
