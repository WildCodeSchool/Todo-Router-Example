import React from 'react';
class Todo extends React.Component {
	constructor(props) {
		super(props);
		this.state = { todo: null, loading: true };
	}

	componentDidMount() {
		console.log('mount');
		fetch(
			`https://jsonplaceholder.typicode.com/todos/${this.props.match.params.id}`
		)
			.then((resp) => resp.json())
			.then((data) => this.setState({ todo: data, loading: false }));
	}
	componentDidUpdate(prevProps) {
		console.log('prev', prevProps.match.params.id);
		console.log('next', this.props.match.params.id);
		console.log(
			prevProps.match.params.id !== this.props.match.params.id
				? 'updating'
				: 'nope'
		);
		if (prevProps.match.params.id !== this.props.match.params.id) {
			this.setState({ loading: true });
			fetch(
				`https://jsonplaceholder.typicode.com/todos/${this.props.match.params.id}`
			)
				.then((resp) => resp.json())
				.then((data) => this.setState({ todo: data, loading: false }));
		}
	}
	render() {
		console.log(this.props);
		return (
			<>
				<h1>Todo number {this.props.match.params.id}</h1>
				<ul>
					{this.state.loading ? (
						<h1>loading...</h1>
					) : (
						<h1>{this.state.todo.title}</h1>
					)}
				</ul>
			</>
		);
	}
}

export default Todo;
