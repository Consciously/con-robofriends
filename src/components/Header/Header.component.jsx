import React, { Fragment, memo } from 'react';

const Header = memo(() => {
	console.log('Header');
	return (
		<Fragment>
			<h1 className='f1'>RoboFriends</h1>
		</Fragment>
	);
});

export default Header;
