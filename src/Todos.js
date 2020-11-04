import React from 'react';
import { Link } from 'react-router-dom';

class Todos extends React.Component {
	constructor(props) {
		super(props);
		this.state = { todos: null, loading: true };
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/todos/')
			.then((resp) => resp.json())
			.then((data) => this.setState({ todos: data, loading: false }));
	}
	render() {
		return (
			<>
				<h1>Todos</h1>
				<ul>
					{this.state.loading ? (
						<h1>loading...</h1>
					) : (
						this.state.todos.map((todo) => (
							<Link to={`/todos/${todo.id}`}>
								<li>{todo.title} </li>
							</Link>
						))
					)}
				</ul>
			</>
		);
	}
}

export default Todos;
