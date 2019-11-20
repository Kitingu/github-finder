import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';

import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = (props) => {
	// we dont pass in an object coz its a single state
	const initialState = null;

	const [state, dispatch] = useReducer(AlertReducer, initialState);

	// set alert to an object with fields message and type which will be parsed in in the child component
	const setAlert = (message, type) => {
		dispatch({ type: SET_ALERT, payload: { message, type } });

		// clear alert afterrepo.name 5 seconds
		setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
	};

	return (
		<AlertContext.Provider
			value={{
				alert: state,
				setAlert,
			}}
		>
			{props.children}
		</AlertContext.Provider>
	);
	// provider makes the value available to the entire app
};

export default AlertState;
