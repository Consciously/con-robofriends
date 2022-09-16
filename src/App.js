import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardList from './components/CardList/CardList.component';
import SearchBox from './components/SearchBox/SearchBox.component';
import { setSearchField, fetchUsersAsync } from './store/actions';
import { selectSearchString } from './store/selectors';
import ErrorBoundry from './components/ErrorBoundry/ErrorBoundry.component';
import Header from './components/Header/Header.component';
import './App.css';

const App = () => {
	const searchString = useSelector(selectSearchString);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUsersAsync());
	}, [dispatch]);

	const searchFieldHandler = e => {
		dispatch(setSearchField(e.target.value.toLowerCase()));
	};

	return (
		<div className='tc'>
			<Header />
			<SearchBox
				placeholder='Search Robots...'
				onChangeSearchField={searchFieldHandler}
				searchValue={searchString}
			/>

			<ErrorBoundry>
				<CardList />
			</ErrorBoundry>
		</div>
	);
};

export default App;
