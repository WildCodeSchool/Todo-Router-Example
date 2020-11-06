import React from 'react';
import Card from '../Card/Card';

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
