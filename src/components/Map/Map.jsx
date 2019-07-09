import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';

class Map extends Component {
	static defaultProps = {
		center: { lat: 48.462, lng: -123.313 },
		zoom: 14,
	};
	render() {
		return (
			<div style={{ height: '100vh', width: '100%' }}>
				<GoogleMapReact
					bootstrapURLKeys={{ key: 'AIzaSyAXALRu_hX1ENLCkT-ojdg-N-rsBvun-8Y' }}
					defaultCenter={this.props.center}
					defaultZoom={this.props.zoom}
				/>
			</div>
		);
	}
}

Map.propTypes = {};

export default Map;
