import React, { Component } from 'react';

class Search extends Component {
	state = {
		text: '',
	};
	onChange = (e) => {
		this.setState({
			text: e.target.value,
		});
	};
	onSubmit = (e) => {
		e.preventDefault();
	};
	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit} className='form'>
					<input
						type='text'
						name=''
						value={this.state.text}
						onChange={this.onChange}
						placeholder='Search Users...'
					/>
					<input
						type='submit'
						value='Search'
						className='btn btn-dark btn-block'
					/>
				</form>
			</div>
		);
	}
}

export default Search;
