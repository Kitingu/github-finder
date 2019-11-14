import React from 'react';

// destructure alert from props which can either be null or an object
// alternatively it should be (this.props.alert)
const Alert = ({ alert }) => {
	return (
        // render alert if alert is not null
		alert !== null && (
			<div className={`alert alert-${alert.type}`}>
				<i className='fas fa-info-circle'></i> {alert.message}
			</div>
		)
	);
};
export default Alert;
// racf creates a arrow functional component
