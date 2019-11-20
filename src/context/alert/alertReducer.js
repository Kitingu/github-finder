import { SET_ALERT, REMOVE_ALERT } from '../types';

export default (state, action) => {
	// we are not spreading coz state is not an array or obj hence we return directly
	switch (action.type) {
		case SET_ALERT:
			return action.payload;

		case REMOVE_ALERT:
			return null;

		default:
			return state;
	}
};
