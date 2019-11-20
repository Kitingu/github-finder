import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/main.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import GitHubState from './context/github/GithubState';

const App = () => {
	const [alert, setAlert] = useState(null);

	// set alert to an object with fields message and type which will be parsed in in the child component
	const showAlert = (message, type) => {
		setAlert({ message, type });

		// clear alert afterrepo.name 5 seconds
		setTimeout(() => setAlert(null), 5000);
	};

	return (
		<GitHubState>
			<Router>
				<div className='App'>
					<Navbar />
					<div className='container'>
						<Alert alert={alert} />
						<Switch>
							<Route
								exact
								path='/'
								render={(props) => (
									<Fragment>
										<Search setAlert={showAlert} />
										<Users />
									</Fragment>
								)}
							/>
							<Route exact path='/about' component={About} />
							<Route exact path='/user/:login' component={User} />
						</Switch>
					</div>
				</div>
			</Router>
		</GitHubState>
	);
};

export default App;
