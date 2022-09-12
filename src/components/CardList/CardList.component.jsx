import React, { Fragment } from 'react';
import Card from '../Card/Card.component';

const CardList = ({ robots }) => {
	if (false) {
		throw new Error('Noooooooooooooo!');
	}

	return (
		<Fragment>
			{robots.map(robot => (
				<Card key={robot.id} robot={robot} />
			))}
		</Fragment>
	);
};

export default CardList;
