import React from 'react';
import { useHistory } from 'react-router-dom';
const types = [1, 2, 3, 4];

function Homepage() {
	let history = useHistory();

	const handleChange = (event) => {
		console.log('change', event.target.value);
		history.push(`/todos/${event.target.value}`);
	};
	return (
		<h1>Hello</h1>
		// <select
		// 	style={{ width: '100px' }}
		// 	onChange={(event) => handleChange(event)}
		// >
		// 	{types.map((type) => (
		// 		<option>{type}</option>
		// 	))}
		// </select>
	);
}

export default Homepage;
