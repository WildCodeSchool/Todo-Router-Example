import React from 'react';

class Todo extends React.Component {
	constructor(props) {
		super(props);
		this.state = { todo: null, loading: true };
	}
	handleFetch() {
		fetch(
			`https://jsonplaceholder.typicode.com/todos/${this.props.match.params.id}`
		)
			.then((resp) => resp.json())
			.then((data) => this.setState({ todo: data, loading: false }));
	}
	componentDidMount() {
		this.handleFetch();
	}
	componentDidUpdate(prevProps) {
		if (prevProps.match.params.id !== this.props.match.params.id) {
			this.handleFetch();
		}
	}
	render() {
		console.log('props', this.props);
		return (
			<>
				<h1>Todo number {this.props.match.params.id}</h1>

				<button onClick={() => this.props.history.goBack()}>Go back</button>

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
