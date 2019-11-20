import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
	const alertContext = useContext(AlertContext);
	const { setAlert } = alertContext;

	const githubContext = useContext(GithubContext);
	const { searchUsers, clearUsers, users } = githubContext;

	const [text, setText] = useState(''); // ' ' sets default to ' '

	const onChange = (e) => setText(e.target.value);

	const onSubmit = (e) => {
		e.preventDefault();
		if (text === '') {
			setAlert('Please enter something', 'light');
		} else {
			searchUsers(text);
			setText('');
		}
	};

	return (
		<div>
			<form onSubmit={onSubmit} className='form'>
				<input
					type='text'
					name=''
					value={text}
					onChange={onChange}
					placeholder='Search Users...'
				/>
				<input
					type='submit'
					value='Search'
					className='btn btn-dark btn-block'
				/>
			</form>

			{/* render clear button if showClear prop is true*/}
			{users.length > 0 && (
				<button
					className='btn btn-light btn-block'
					onClick={clearUsers}
				>
					Clear
				</button>
			)}
		</div>
	);
};

export default Search;
