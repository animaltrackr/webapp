import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Icon, Tooltip } from 'antd';
import './Map.less';

class Map extends Component {
	renderIcons = () => {
		const { deerStates, timeRange } = this.props;
		return deerStates
			.filter(deer => deer.visible)
			.map(deer => {
				return deer.points.map(point => {
					if (point.geo_lat.startsWith('-')) {
						const tmp = point.geo_lat;
						point.geo_lat = point.geo_long;
						point.geo_long = tmp;
					}
					const pointTimestamp = new Date(pos.timestamp);
					if (
						!this.props.timeRange.startDate ||
						(pointTimestamp >= this.props.timeRange.startDate &&
							pointTimestamp <= this.props.timeRange.endDate)
					) {
						return (
							<Tooltip
								lat={point.geo_lat}
								lng={point.geo_long}
								mouseEnterDelay={0.05}
								overlayClassName="tooltip"
								title={() => (
									<div>
										<span>{deer.name}</span>
										<span>lat: {point.geo_lat}</span>
										<span>long: {point.geo_long}</span>
										<span>{pointTimestamp.toLocaleString()}</span>
									</div>
								)}
							>
								<Icon
									type="environment"
									theme="filled"
									style={{
										color: deer.colour,
									}}
									className="pointer"
								/>
							</Tooltip>
						);
					}
					return null;
				});
			});
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
