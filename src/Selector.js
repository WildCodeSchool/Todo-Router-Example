import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
const types = [1, 2, 3, 4];
export default function Selector() {
	const history = useHistory();
	const handleChange = (event) => {
		console.log('change', event.target.value);
		history.push(`/todos/${event.target.value}`);
	};
	return (
		<select
			style={{ width: '100px' }}
			onChange={(event) => handleChange(event)}
		>
			{types.map((type) => (
				<option>{type}</option>
			))}
		</select>
	);
}
