import logo from './logo.svg';
import './App.css';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
	useHistory,
} from 'react-router-dom';
import Homepage from './Homepage';
import Todos from './Todos';
import Todo from './Todo';
import Selector from './Selector';

// painting / sculpture / photography
const types = [1, 2, 3, 4];
function App() {
	let history = useHistory();

	const handleChange = (event) => {
		console.log('change', event.target.value);
		history.push(`/todos/${event.target.value}`);
	};
	return (
		<Router>
			<select
				style={{ width: '100px' }}
				onChange={(event) => handleChange(event)}
			>
				{types.map((type) => (
					<option>{type}</option>
				))}
			</select>
			<Selector />
			<Switch>
				<Route path='/' exact component={Homepage}></Route>
				<Route path='/todos' exact component={Todos}></Route>
				<Route path='/todos/:id' exact component={Todo}></Route>
			</Switch>
		</Router>
	);
}

export default App;
