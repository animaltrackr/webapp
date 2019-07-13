import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import PlaceIcon from '@material-ui/icons/Place';

class Map extends Component {
	render() {
		return (
			<div style={{ height: 'calc(100vh - 47.4px)', width: '100%' }}>
				<GoogleMapReact
					bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
					defaultCenter={{ lat: 48.462, lng: -123.313 }}
					defaultZoom={14}
					options={function(maps) {
						return { mapTypeId: 'satellite' };
					}}
				>
					{this.props.deerStates.map((element, index) => {
						if (element['state'] || this.props.showAll) {
							return element['last_location'].map(pos => {
								console.log(pos);
								return (
									<PlaceIcon
										style={{ color: element['colour'] }}
										lat={pos[0]}
										lng={pos[1]}
										text="My Marker"
									/>
								);
							});
						}
					})}
				</GoogleMapReact>
			</div>
		);
	}
}

Map.propTypes = {};

export default Map;
