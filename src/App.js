import { useEffect, useState } from 'react';
import CardList from './components/CardList/CardList.component';
import SearchBox from './components/SearchBox/SearchBox.component';

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
			<h1>RoboFriends</h1>
			<SearchBox
				placeholder='Search Robots...'
				onChangeSearchField={searchFieldHandler}
				searchValue={searchField}
			/>
			<CardList robots={filteredRobots} />
		</div>
	);
};

export default App;
