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
		};

		const trackersPromise = api.readTrackers();
		const pointsPromise = api.readPoints();

		// Wait for both requests to return, then...
		Promise.all([trackersPromise, pointsPromise]).then(values => {
			const [trackers, points] = values;
			// console.log('responded', values);
			// console.log('responded', trackers, points);

			// Build list of tracker IDs
			const tracker_ids = trackers.map(tracker => tracker.id);
			// Turn into object with id as key, and [] as value
			const pointsMap = tracker_ids.reduce(
				(acc, id) => ({ ...acc, [id]: [] }),
				{}
			);

			console.log(pointsMap);

			// Push points onto appropriate array (per tracker id)
			points.forEach(point => pointsMap[point.tracker].push(point));

			console.log(pointsMap);

			const animals = trackers.map(tracker => ({
				name: tracker.animal_id,
				id: tracker.id,
				status: tracker.status,
				visible: false,
				colour: 'red',
				tracks: pointsMap[tracker.id],
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

			console.log(animals);

			// Save to state
			this.setState({ deerStates: animals, loading: false });
		});
	}

	toggleDeer = e => {
		this.setState(({ deerStates }) => ({
			deerStates: deerStates.map(deer => ({
				...deer,
				visible: deer.id === e.key ? !deer.visible : deer.visible,
			})),
		}));

		console.log(e.key);

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

		this.setState(({ deerStates }) => ({
			deerStates: deerStates.map(deer => ({
				...deer,
				visible: !this.state.showAll,
			})),
		}));
	};

	render() {
		return (
			<div>
				<NavBar
					deerStates={this.state.deerStates}
					toggleDeer={this.toggleDeer}
					enableAllDeer={this.enableAllDeer}
					hideFilter={this.state.hideFilter}
				/>
				<Map deerStates={this.state.deerStates} />
			</div>
		);
	}
}

Tracking.propTypes = {
	deerStates: PropTypes.array.isRequired,
};

export default Tracking;
