import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
	state = {
		users: [
			{
				id: 1,
				login: 'majombo',
				html_url: 'https://github.com/majombo',
				avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
			},
			{
				id: 2,
				login: 'kitingu',
				html_url: 'https://github.com/kitingu',
				avatar_url:
					'https://avatars0.githubusercontent.com/u/38378510?v=4',
			},
		],
	};
	render() {
		return (
			<div style={userStyle}>
				{this.state.users.map((user) => (
					<UserItem key={user.id} user = {user} />
				))}
			</div>
		);
	}
}
const userStyle={
    display:'grid',
    gridTemplateColumns:'repeat(3, 1fr)',
    gridGap:'1rem'
}

export default Users;
