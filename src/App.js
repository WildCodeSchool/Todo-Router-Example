import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Todos from './Todos';
import Todo from './Todo';
function App() {
	return (
		<Router>
			<Route path='/' exact component={Homepage}></Route>
			<Route path='/todos' exact component={Todos}></Route>
			<Route path='/todos/:id' exact component={Todo}></Route>
		</Router>
	);
}

export default App;
