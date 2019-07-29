import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Map from '../../components/Map/Map';
import NavBar from '../../components/NavBar/NavBar';
import * as api from '../../modules/api';

class Tracking extends Component {
	static defaultProps = {
		deerStates: [
			{
				name: 'Deer 1',
				id: 1,
				state: false,
				last_location: [[48.471, -123.324], [48.475, -123.328]],
				colour: 'blue',
			},
			{
				name: 'Deer 2',
				id: 2,
				state: false,
				last_location: [
					[48.462, -123.313],
					[48.465, -123.318],
					[48.469, -123.312],
				],
				colour: 'white',
			},
		],
	};

	constructor(props) {
		super(props);

		this.state = {
			deerStates: [],
			loading: true,
			showAll: false,
			hideFilter: true,
			timeRange: {
				startDate: null,
				endDate: null,
			},
		};

		const trackersPromise = api.readTrackers();
		const pointsPromise = api.readPoints();

		// Wait for both requests to return, then...
		Promise.all([trackersPromise, pointsPromise]).then(values => {
			const [trackers, points] = values;

			// Build list of tracker IDs
			const tracker_ids = trackers.map(tracker => tracker.id);
			// Turn into object with id as key, and [] as value
			const pointsMap = tracker_ids.reduce(
				(acc, id) => ({ ...acc, [id]: [] }),
				{}
			);

			// Push points onto appropriate array (per tracker id)
			points.forEach(point => pointsMap[point.tracker].push(point));

			const animals = trackers.map(tracker => ({
				name: tracker.animal_id,
				id: tracker.id,
				status: tracker.status,
				visible: false,
				colour: 'red',
				tracks: pointsMap[tracker.id],
				max_error_radius: tracker.max_error_radius,
				location_method: tracker.location_method,
				loading: {
					status: false,
					name: false,
					colour: false,
				},
				// tracks ex:
				// [{
				// 	"id": "49b497aa-461f-40dc-9ba0-774d518f2354",
				// 	"tracker": "bc6bf7b3-b173-4355-b5d2-ac1cdb2263ad",
				// 	"timestamp": "2019-07-23T06:40:31.092000Z",
				// 	"geo_lat": "48.463325",
				// 	"geo_long": "-123.311751",
				// 	"geo_error_radius": "1.0",
				// 	"geo_method": "G"
				// }]
			}));

			// Save to state
			this.setState({ deerStates: animals, loading: false });
		});
	}

	toggleDrawer = e => {
		this.setState({ drawerVisible: !this.state.drawerVisible });
	};

	handleDateFilter = dates => {
		if (dates != null) {
			this.setState({
				timeRange: {
					startDate: new Date(dates['date-time-picker-start']),
					endDate: new Date(dates['date-time-picker-end']),
				},
			});
		} else {
			this.setState({
				timeRange: {
					startDate: null,
					endDate: null,
				},
			});
		}
	};

	updateState = (index, value, type) => {
		this.setState(({ deerStates }) => ({
			deerStates: deerStates.map((deer, i) => ({
				...deer,
				name: i === index && type === 'name' ? value : deer.name,
				status: i === index && type === 'status' ? value : deer.status,
				colour: i === index && type === 'colour' ? value : deer.colour,
				loading: {
					status: i === index && type === 'status' ? true : deer.loading.status,
					name: i === index && type === 'name' ? true : deer.loading.name,
					colour: i === index && type === 'colour' ? true : deer.loading.colour,
				},
			})),
		}));
	};

	finishedLoading = (index, type) => {
		this.setState(({ deerStates }) => ({
			deerStates: deerStates.map((deer, i) => ({
				...deer,
				loading: {
					status:
						i === index && type === 'status' ? false : deer.loading.status,
					name: i === index && type === 'name' ? false : deer.loading.name,
					colour:
						i === index && type === 'colour' ? false : deer.loading.colour,
				},
			})),
		}));
	};

	toggleDeer = e => {
		this.setState(
			({ deerStates }) => ({
				deerStates: deerStates.map(deer => ({
					...deer,
					visible: deer.id === e.key ? !deer.visible : deer.visible,
				})),
			}),
			() => this.filterButtonState()
		);

		// try {
		// 	// try to access the tracks of the tracker so can populate if fails
		// 	var tracks =this.state.deerStates.filter(deer => deer.id == e.key)[0].tracks;
		//
		// } catch {
		//    this.getDeerTracks(e.key);
		// }
	};

	enableAllDeer = () => {
		this.setState({ showAll: !this.state.showAll });

		this.setState(
			({ deerStates }) => ({
				deerStates: deerStates.map(deer => ({
					...deer,
					visible: !this.state.showAll,
				})),
			}),
			() => this.filterButtonState()
		);
	};

	filterButtonState() {
		var set = false;
		this.state.deerStates.map(element => {
			if (element['visible']) {
				this.setState({ hideFilter: false });
				set = true;
				return 0;
			}
			return 0;
		});

		if (!set) {
			this.setState({ hideFilter: true });
		}
	}

	render() {
		return (
			<div>
				<NavBar
					deerStates={this.state.deerStates}
					toggleDeer={this.toggleDeer}
					enableAllDeer={this.enableAllDeer}
					showAll={this.state.showAll}
					hideFilter={this.state.hideFilter}
					/* props for the drawer (filter logic) */
					drawerVisible={this.state.drawerVisible}
					toggleDrawer={this.toggleDrawer}
					handleDateFilter={this.handleDateFilter}
					updateState={this.updateState}
					finishedLoading={this.finishedLoading}
				/>
				<Map
					deerStates={this.state.deerStates}
					timeRange={this.state.timeRange}
				/>
			</div>
		);
	}
}

Tracking.propTypes = {
	deerStates: PropTypes.array.isRequired,
};

export default Tracking;
