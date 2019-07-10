import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';

class Map extends Component {
	static defaultProps = {
		center: { lat: 48.462, lng: -123.313 },
		zoom: 14,
		apiKey: '',
	};
	render() {
		return (
			<div style={{ height: '100vh', width: '100%' }}>
				<GoogleMapReact
					bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
					defaultCenter={this.props.center}
					defaultZoom={this.props.zoom}
				/>
			</div>
		);
	}
}

Map.propTypes = {};

export default Map;
