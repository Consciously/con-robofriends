import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import {
	selectRobots,
	selectIsLoading,
	selectError,
} from '../../store/selectors';
import Card from '../Card/Card.component';
import './CardList.styles.css';

const CardList = () => {
	const selectRobotsArray = useSelector(selectRobots);
	const isLoading = useSelector(selectIsLoading);
	const error = useSelector(selectError);

	let content;

	if (isLoading) {
		content = <h1>Loading...</h1>;
	} else if (error) {
		content = <h1>{error}</h1>;
	} else {
		content = (
			<div className='card-container'>
				{selectRobotsArray.map(robot => (
					<Card key={robot.id} robot={robot} />
				))}
			</div>
		);
	}

	return <Fragment>{content}</Fragment>;
};

export default CardList;
