// Modules
import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
	useHistory,
} from 'react-router-dom';

// Utils
import { categories } from './utils/index';

// Components
import Homepage from './Pages/Hompage';
import Todos from './components/TodoList/Todos';
import Todo from './components/TodoList/Todo';
import Selector from './components/Selector/Selector';

// Styles
import './App.css';

function App() {
	return (
		<Router>
			{/* <Selector list={categories} redirect /> */}
			<Switch>
				<Route path='/' exact component={Homepage}></Route>
				<Route path='/todos' exact component={Todos}></Route>
				<Route path='/todos/:id' exact component={Todo}></Route>
			</Switch>
		</Router>
	);
}

export default App;
