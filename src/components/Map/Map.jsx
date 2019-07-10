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
			<div style={{ height: 'calc(100vh - 64px)', width: '100%' }}>
				<GoogleMapReact
					bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
					defaultCenter={this.props.center}
					defaultZoom={this.props.zoom}
					options={function(maps) {
						return { mapTypeId: 'satellite' };
					}}
				/>
			</div>
		);
	}
}

Map.propTypes = {};

export default Map;
