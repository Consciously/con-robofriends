import { useEffect, useState } from 'react';
import CardList from './components/CardList/CardList.component';
import SearchBox from './components/SearchBox/SearchBox.component';
import Scroll from './components/Scroll/Scroll.component';
import ErrorBoundry from './components/ErrorBoundry/ErrorBoundry.component';
import './App.css';

const App = () => {
	const [robots, setRobots] = useState([]);
	const [searchField, setSearchField] = useState('');
	const [filteredRobots, setFilteredRobots] = useState(robots);

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await fetch(
					'https://jsonplaceholder.typicode.com/users'
				);
				const data = await response.json();
				setRobots(data);
			} catch (error) {
				console.error(error.message);
			}
		};

		fetchUsers();
	}, []);

	useEffect(() => {
		const filteredRobotsArray = robots.filter(robot =>
			robot?.name.toLowerCase().includes(searchField)
		);

		setFilteredRobots(filteredRobotsArray);
	}, [robots, searchField]);

	const searchFieldHandler = e => {
		const searchString = e.target.value.toLowerCase();
		setSearchField(searchString);
	};

	return (
		<div className='tc'>
			<h1 className='f1'>RoboFriends</h1>
			<SearchBox
				placeholder='Search Robots...'
				onChangeSearchField={searchFieldHandler}
				searchValue={searchField}
			/>
			{!robots.length ? (
				<h1>Loading...</h1>
			) : (
				<Scroll>
					<ErrorBoundry>
						<CardList robots={filteredRobots} />
					</ErrorBoundry>
				</Scroll>
			)}
		</div>
	);
};

export default App;
