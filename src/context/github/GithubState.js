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

	// search github users
	const searchUsers = async (text) => {
		setLoading();
		const res = await axios.get(
			`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);

		dispatch({ type: SEARCH_USERS, payload: res.data.items });
	};

	// setLoading
	const setLoading = () => dispatch({ type: SET_LOADING });

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				user: state.user,
				repos: state.repos,
				alert: state.alert,
				loading: state.loading,
				searchUsers,
			}}
		>
			{props.children}
		</GithubContext.Provider>
	);
	// provider makes the value available to the entire app
};

export default GithubState;
