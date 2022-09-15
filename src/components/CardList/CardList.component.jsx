import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import {
	selectRobots,
	selectIsLoading,
	selectError,
} from '../../store/selectors';
import Card from '../Card/Card.component';

const CardList = () => {
	const selectRobotsArray = useSelector(selectRobots);
	const isLoading = useSelector(selectIsLoading);
	const error = useSelector(selectError);

	console.log('CardList');

	return (
		<Fragment>
			{isLoading ? (
				<h1>LOADING...</h1>
			) : error ? (
				<h1>{error}</h1>
			) : (
				selectRobotsArray.map(robot => <Card key={robot.id} robot={robot} />)
			)}
		</Fragment>
	);
};

export default CardList;
