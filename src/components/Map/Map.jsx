import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Icon } from 'antd';

class Map extends Component {
	renderIcons = () => {
		return this.props.deerStates
			? this.props.deerStates.map((element, index) => {
					if (element.visible) {
						return element.points.map(pos => {
							if (pos.geo_lat.startsWith('-')) {
								const tmp = pos.geo_lat;
								pos.geo_lat = pos.geo_long;
								pos.geo_long = tmp;
							}
							const pointTimestamp = new Date(pos.timestamp);
							if (
								!this.props.timeRange.startDate ||
								(pointTimestamp >= this.props.timeRange.startDate &&
									pointTimestamp <= this.props.timeRange.endDate)
							) {
								return (
									<Icon
										type="environment"
										theme="filled"
										style={{ color: element.colour, fontSize: '18px' }}
										lat={pos.geo_lat}
										lng={pos.geo_long}
										text="My Marker"
									/>
								);
							}
							return '';
						});
					}
					return '';
			  })
			: '';
	};

	render() {
		return (
			<div style={{ height: 'calc(100vh - 50px)', width: '100%' }}>
				<GoogleMapReact
					bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
					defaultCenter={{ lat: 48.462, lng: -123.313 }}
					defaultZoom={14}
					options={function(maps) {
						return { mapTypeId: 'satellite' };
					}}
				>
					{this.renderIcons()}
				</GoogleMapReact>
			</div>
		);
	}
}

Map.propTypes = {};

export default Map;
