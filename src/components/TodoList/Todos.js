import React from 'react';
import Card from '../Card/Card';
import Selector from '../Selector/Selector';
import { categories } from '../../utils/index';

class Todos extends React.Component {
	constructor(props) {
		super(props);
		this.state = { todos: [], loading: true };
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/todos/')
			.then((resp) => resp.json())
			.then((data) => this.setState({ todos: data, loading: false }));
	}

	render() {
		console.log(this.state);
		return (
			<>
				<h1>Todos</h1>
				<Selector list={categories} redirect />

				<div className='card-list'>
					{this.state.loading ? (
						<h1>loading...</h1>
					) : (
						this.state.todos.map((todo) => (
							<Card title={todo.title} id={todo.id} done={todo.completed} />
						))
					)}
				</div>
			</>
		);
	}
}

export default Todos;
