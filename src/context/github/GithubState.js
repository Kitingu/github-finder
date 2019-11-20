import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

import {
	SEARCH_USERS,
	SET_LOADING,
	SET_ALERT,
	REMOVE_ALERT,
	GET_REPOS,
	GET_USER,
	CLEAR_USERS,
} from '../types';

const GithubState = (props) => {
	const initialState = {
		users: [],
		loading: false,
		repos: [],
		alert: null,
		user: {},
	};

	const [state, dispatch] = useReducer(GithubReducer, initialState);

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				user: state.user,
				repos: state.repos,
				alert: state.alert,
				loading: state.loading,
			}}
		>
			this.props..children
		</GithubContext.Provider>
	);
	// provider makes the value available to the entire app
};

export default GithubState;
