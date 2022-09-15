import React, { Fragment, memo } from 'react';
import CountButton from '../CountButton/CountButton.component';

const Header = memo(() => {
	console.log('Header');
	return (
		<Fragment>
			<h1 className='f1'>RoboFriends</h1>
			<CountButton style={{ color: 'tomato' }} />
		</Fragment>
	);
});

export default Header;
