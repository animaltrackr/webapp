import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Icon from 'antd/lib/icon';

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
					{this.props.deerStates
						? this.props.deerStates.map((element, index) => {
								if (element['visible']) {
									return element['tracks'].map(pos => {
										if (pos['geo_lat'].startsWith('-')) {
											var tmp = pos['geo_lat'];
											pos['geo_lat'] = pos['geo_long'];
											pos['geo_long'] = tmp;
										}
										return (
											<Icon
												type="environment"
												theme="filled"
												style={{ color: element['colour'], fontSize: '15px' }}
												lat={pos['geo_lat']}
												lng={pos['geo_long']}
												text="My Marker"
											/>
										);
									});
								}
								return '';
						  })
						: ''}
				</GoogleMapReact>
			</div>
		);
	}
}

Map.propTypes = {};

export default Map;
