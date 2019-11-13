import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({icon,title}) => {
	// destructure icon and title from props
	return (
		<nav className='navbar bg-primary'>
			<h1>
				<i className={icon} />
				{title}
			</h1>
		</nav>
	);
};

Navbar.defaultProps = {
	title: 'Github-finder',
	icon: 'fab fa-github',
};

// proptypes gives warnings when props parsedin are not of the expected type
Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
};

export default Navbar;
