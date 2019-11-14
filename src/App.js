import React, { Component } from 'react';
import axios from 'axios';
import './styles/main.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
class App extends Component {
	state = {
		users: [],
		loading: false,
		alert: null,
	};

	// search github users
	searchUsers = async (text) => {
		this.setState({
			loading: true,
		});
		const res = await axios.get(
			`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);

		this.setState({
			users: res.data.items,
			loading: false,
		});
	};
	// clear searched users from state
	clearUsers = () => {
		this.setState({
			users: [],
			loading: false,
		});
	};
	// set alert to an object with fields message and type which will be parsed in in the child component
	setAlert = (message, type) => {
		this.setState({
			alert: { message, type },
		});
		// clear alert after 5 seconds
		setTimeout(() => this.setState({ alert: null }), 5000);
	};

	// show clear is a prop for showing the clear button on the search page
	render() {
		const { users, loading } = this.state;

		return (
			<div className='App'>
				<Navbar />
				<Alert alert={this.state.alert} />
				<div className='container'>
					<Search
						searchUsers={this.searchUsers}
						clearUsers={this.clearUsers}
						showClear={users.length > 0 ? true : false}
						setAlert={this.setAlert}
					/>
					<Users loading={loading} users={users} />
				</div>
			</div>
		);
	}
}

export default App;
