import React, { Component } from 'react';

class UserItem extends Component {
	state = {
		id: 'id',
		login: 'kitingu',
		html_url: 'https://github.com/kitingu',
		avatar_url: 'https://avatars0.githubusercontent.com/u/38378510?v=4',
	};

	render() {
		const { avatar_url, html_url, login, id } = this.state;
		return (
			<div className='card text-center'>
				<img
					src={avatar_url}
					alt=''
					className='round-img'
					style={{ width: '60px' }}
				/>
				<h3>{login}</h3>
				<div>
					<a href={html_url} className='btn btn-dark btn-sm my-1'>
						More
					</a>
				</div>
			</div>
		);
	}
}

export default UserItem;
