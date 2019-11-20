import {
	SEARCH_USERS,
	SET_LOADING,
	SET_ALERT,
	REMOVE_ALERT,
	GET_REPOS,
	GET_USER,
	CLEAR_USERS,
} from '../types';

export default (state, action) => {
	switch (action.type) {
		case SET_LOADING:
			return {
				...state,
				loading: true,
			};

		case SEARCH_USERS:
			return {
				...state,
				users: action.payload,
				loading: false,
			};
		case CLEAR_USERS:
			return {
				...state,
				users: [],
				loading: false,
			};

		case GET_USER:
			return {
				...state,
				user: action.payload,
				loading: false,
			};

		default:
			return state;
	}
};
