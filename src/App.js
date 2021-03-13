import React, { useState } from 'react';
import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Switch, Route } from 'react-router-dom';
import { GraphChoice, HomePage } from './pages/index';

function App() {
	const [graphChoice, setGraphChoice] = useState('');
	const [graphSelection, setGraphSelection] = useState([]);

	const addToGraphSelection = () => {
		setGraphSelection(...graphSelection, graphChoice);
	};
	return (
		<>
			{/* Routes */}
			<Switch>
				<Route path='/' exact>
					<HomePage />
				</Route>
				<Route path='/graph-choice' exact>
					<GraphChoice />
				</Route>
			</Switch>
		</>
	);
}

export default App;
