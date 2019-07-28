import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ControlCard.less';

import { Card } from 'antd';

class ControlCard extends Component {
	render() {
		return <Card className="control-card">ControlCard</Card>;
	}
}

ControlCard.propTypes = {
	DeerStates: PropTypes.arrayOf([PropTypes.object]),
};

export default ControlCard;
