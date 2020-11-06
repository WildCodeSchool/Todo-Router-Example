import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Selector({ list, onChange, redirect }) {
	let history = useHistory();
	const handleChange = (event) => {
		console.log('change', event.target.value);
		if (onChange) {
			onchange(event);
		}
		if (redirect) {
			history.push(`/todos/${event.target.value}`);
		}
	};
	return (
		<select
			style={{ width: '100px' }}
			onChange={(event) => handleChange(event)}
		>
			{list.map((type) => (
				<option>{type}</option>
			))}
		</select>
	);
}
