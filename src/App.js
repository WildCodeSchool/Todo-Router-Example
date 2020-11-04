import logo from './logo.svg';
import './App.css';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import Homepage from './Homepage';
import Todos from './Todos';
import Todo from './Todo';
import Selector from './Selector';

// painting / sculpture / photography

function App() {
	console.log('re-render');
	return (
		<Router>
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
