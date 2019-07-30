import React, { Component } from 'react';
import * as api from 'modules/api';
import Map from 'components/Map';
import NavBar from 'components/NavBar';
import ControlCard from 'components/ControlCard';

class Tracking extends Component {
	constructor(props) {
		super(props);

		this.state = {
			deerStates: [],
			loading: true,
			showAll: false,
			hideFilter: true,
			dateFilterVisible: false,
			drawerVisible: false,
			timeRange: {
				startDate: null,
				endDate: null,
			},
		};

		api.readTrackers().then(trackers => {
			const animals = trackers.map(tracker => ({
				name: tracker.animal_id,
				id: tracker.id,
				status: tracker.status,
				visible: false,
				colour: 'red',
				points: tracker.points,
				max_error_radius: tracker.max_error_radius,
				location_method: tracker.location_method,
				loading: {
					status: false,
					name: false,
					colour: false,
					location_method: false,
					max_error_radius: false,
				},
				// points ex:
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

	toggleDrawer = () => {
		this.setState(({ drawerVisible }) => ({ drawerVisible: !drawerVisible }));
	};

	toggleDateFilter = () => {
		this.setState(({ dateFilterVisible }) => ({
			dateFilterVisible: !dateFilterVisible,
		}));
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

	updateState = (selectedDeer, value, type) => {
		this.setState(({ deerStates }) => ({
			deerStates: deerStates.map(deer => ({
				...deer,
				name:
					selectedDeer.id === deer.id && type === 'name' ? value : deer.name,
				status:
					selectedDeer.id === deer.id && type === 'status'
						? value
						: deer.status,
				colour:
					selectedDeer.id === deer.id && type === 'colour'
						? value
						: deer.colour,
				loading: {
					status:
						selectedDeer.id === deer.id && type === 'status'
							? true
							: deer.loading.status,
					name:
						selectedDeer.id === deer.id && type === 'name'
							? true
							: deer.loading.name,
					colour:
						selectedDeer.id === deer.id && type === 'colour'
							? true
							: deer.loading.colour,
					max_error_radius:
						selectedDeer.id === deer.id && type === 'max_error_radius'
							? true
							: deer.loading.max_error_radius,
					location_method:
						selectedDeer.id === deer.id && type === 'location_method'
							? true
							: deer.loading.location_method,
				},
			})),
		}));
	};

	finishedLoading = (selectedDeer, type) => {
		this.setState(({ deerStates }) => ({
			deerStates: deerStates.map(deer => ({
				...deer,
				loading: {
					status:
						selectedDeer.id === deer.id && type === 'status'
							? false
							: deer.loading.status,
					name:
						selectedDeer.id === deer.id && type === 'name'
							? false
							: deer.loading.name,
					colour:
						selectedDeer.id === deer.id && type === 'colour'
							? false
							: deer.loading.colour,
					max_error_radius:
						selectedDeer.id === deer.id && type === 'max_error_radius'
							? false
							: deer.loading.max_error_radius,
					location_method:
						selectedDeer.id === deer.id && type === 'location_method'
							? false
							: deer.loading.location_method,
				},
			})),
		}));
	};

	toggleDeer = id => {
		this.setState(
			({ deerStates }) => ({
				deerStates: deerStates.map(deer => ({
					...deer,
					visible: deer.id === id ? !deer.visible : deer.visible,
				})),
			}),
			() => this.filterButtonState()
		);
	};

	toggleAllDeer = () => {
		this.setState(prevState => ({ showAll: !prevState.showAll }));

		this.setState(
			({ deerStates, showAll }) => ({
				deerStates: deerStates.map(deer => ({
					...deer,
					visible: showAll,
				})),
			}),
			() => this.filterButtonState()
		);
	};

	filterButtonState() {
		let set = false;
		this.state.deerStates.map(element => {
			if (element.visible) {
				this.setState({ hideFilter: false, showAll: true });
				set = true;
				return 0;
			}
			return 0;
		});

		if (!set) {
			this.setState({ hideFilter: true, showAll: false });
		}
	}

	render() {
		return (
			<div>
				<NavBar
					deerStates={this.state.deerStates}
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
				<ControlCard
					deerStates={this.state.deerStates}
					showAll={this.state.showAll}
					dateFilterVisible={this.state.dateFilterVisible}
					toggleDateFilter={this.toggleDateFilter}
					toggleDeer={this.toggleDeer}
					toggleAllDeer={this.toggleAllDeer}
					handleDateFilter={this.handleDateFilter}
					loading={this.state.loading}
				/>
			</div>
		);
	}
}

Tracking.propTypes = {};

export default Tracking;
