import React, { Fragment } from 'react';
import Card from '../Card/Card.component';

const CardList = ({ robots }) => {
	return (
		<Fragment>
			{robots.map(robot => (
				<Card key={robot.id} robot={robot} />
			))}
		</Fragment>
	);
};

export default CardList;
