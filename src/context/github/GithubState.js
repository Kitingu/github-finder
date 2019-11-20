import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

import {
	SEARCH_USERS,
	SET_LOADING,
	GET_REPOS,
	GET_USER,
	CLEAR_USERS,
} from '../types';

let githubClientId;
let githubClientSecret;

if (process.NODE_ENV !== 'production') {
	githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
	githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
	githubClientId = process.env.GITHUB_CLIENT_ID;
	githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

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
			`https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
		);

		dispatch({ type: SEARCH_USERS, payload: res.data.items });
	};

	// setLoading
	const setLoading = () => dispatch({ type: SET_LOADING });

	// clear searched users from state
	const clearUsers = () => dispatch({ type: CLEAR_USERS });

	// Get a single github user
	const getUser = async (username) => {
		setLoading();
		const res = await axios.get(
			`https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
		);
		dispatch({ type: GET_USER, payload: res.data });
	};

	// Get a single github user
	const getUserRepos = async (username) => {
		setLoading();
		const res = await axios.get(
			`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		dispatch({ type: GET_REPOS, payload: res.data });
	};

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				user: state.user,
				repos: state.repos,
				alert: state.alert,
				loading: state.loading,
				searchUsers,
				clearUsers,
				getUser,
				getUserRepos,
			}}
		>
			{props.children}
		</GithubContext.Provider>
	);
	// provider makes the value available to the entire app
};

export default GithubState;
