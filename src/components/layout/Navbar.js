import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class Navbar extends Component {
	static defaultProps = {
		title: 'Github-finder',
		icon: 'fab fa-github',
	};
	// proptypes gives warnings when props parsedin are not of the expected type
	static propTypes = {
		title: PropTypes.string.isRequired,
		icon: PropTypes.string.isRequired,
	};
	render() {
		return (
			<nav className='navbar bg-primary'>
				<h1>
					<i className={this.props.icon} />
					{this.props.title}
				</h1>
			</nav>
		);
	}
}
