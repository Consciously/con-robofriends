import React, { useState } from 'react';

const defaultState = {
	countValue: 0,
};

const CountButton = ({ style }) => {
	const [count, setCount] = useState(defaultState);

	const updateCount = () => {
		setCount(prevState => ({
			...prevState,
			countValue: prevState.countValue + 1,
		}));
	};

	return (
		<button
			style={{ color: style.color }}
			onClick={updateCount}
		>{`Count: ${count.countValue}`}</button>
	);
};

export default CountButton;
