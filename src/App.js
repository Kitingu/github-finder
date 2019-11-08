import React, { Component, Fragment } from 'react';
import './styles/main.css';
import { conditionalExpression } from '@babel/types';

class App extends Component {
	render() {
    const user = 'mwendwa';
    const loading = true;
    const showName = false;
		return (
			// fragment --> let you group a list of children without adding extra nodes to the DOM.
			<Fragment className='App'>
				<h1>Hello {user}</h1>
        {user.toUpperCase()}
        {/**  conditionalExpression using &&*/}
        <h1>{showName&& user}</h1>
			</Fragment>
		);
	}
}

export default App;
