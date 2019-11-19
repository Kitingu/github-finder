import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ showClear, searchUsers, setAlert,clearUsers }) => {
	const [text, setText] = useState(''); // ' ' sets default to ' '

	const onChange = (e) => setText(e.target.value);

	const onSubmit = (e) => {
		e.preventDefault();
		if (text === '') {
			setAlert('Please enter somethng', 'light');
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
			{showClear && (
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

Search.propTypes = {
	searchUsers: PropTypes.func.isRequired,
	clearUsers: PropTypes.func.isRequired,
	showClear: PropTypes.bool.isRequired,
	setAlert: PropTypes.func.isRequired,
};
export default Search;
