import React, { Component } from 'react';
import Map from '../../Map/Map';
import NavBar from '../../NavBar/NavBar';
import { PropTypes } from 'prop-types';

class Tracking extends Component {
	constructor(props) {
		super(props);
		this.handler = this.handler.bind(this);
		this.state = {
			deerStates: this.props.deerStates,
			showAll: false,
		};
	}

	handler(e) {
		if (e.key == this.props.deerStates.length + 1) {
			console.log(this.state.showAll);

			this.setState({ showAll: !this.state.showAll });
			return;
		}
		var temp = this.props.deerStates;
		temp[e.key].state = !temp[e.key].state;
		this.setState({ deerStates: temp });
	}

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

	render() {
		return (
			<div>
				<NavBar deerStates={this.props.deerStates} handler={this.handler} />
				<Map deerStates={this.props.deerStates} showAll={this.state.showAll} />
			</div>
		);
	}
}

Tracking.propTypes = {
	deerStates: PropTypes.instanceOf(Map).isRequired,
};

export default Tracking;
