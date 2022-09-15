const SearchBox = ({ placeholder, onChangeSearchField, searchValue }) => {
	console.log('Searchbox');

	return (
		<form className='pa2'>
			<input
				className='pa3 ba b--green bg-lightest-blue'
				type='search'
				placeholder={placeholder}
				onChange={onChangeSearchField}
				value={searchValue}
			/>
		</form>
	);
};

export default SearchBox;
