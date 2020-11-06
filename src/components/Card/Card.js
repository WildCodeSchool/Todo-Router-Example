import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
function Card({ title, id, done }) {
	return (
		<div class='card'>
			<h3 style={{ textDecoration: done ? 'line-through' : null }}>{title}</h3>
			<Link to={`/todos/${id}`}>
				<button>Go to Details</button>
			</Link>
		</div>
	);
}

export default Card;
