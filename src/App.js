import React, { useState } from 'react';
import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Switch, Route } from 'react-router-dom';
import { GraphChoice, HomePage } from './pages/index';

function App() {
	const [graphChoice, setGraphChoice] = useState('');
	const [graphSelection, setGraphSelection] = useState([]);
	const [companyName, setCompanyName] = useState(null);
	const [companyInfoInput, setCompanyInfoInput] = useState(null);
	const [nextPage, setNextPage] = useState(false);
	const [graphOneType, setGraphOneType] = useState(['pie']);
	const [graphTwoType, setGraphTwoType] = useState('bar');

	return (
		<>
			{/* Routes */}
			<Switch>
				<Route path='/' exact>
					<HomePage
						companyName={companyName}
						setCompanyName={setCompanyName}
						companyInfoInput={companyInfoInput}
						setCompanyInfoInput={setCompanyInfoInput}
						nextPage={nextPage}
						setNextPage={setNextPage}
					/>
				</Route>
				<Route path='/graph-choice' exact>
					{/* Move graph 2 down */}
					<GraphChoice
						companyName={companyName}
						graphOneType={graphOneType}
						setGraphOneType={setGraphOneType}
						graphTwoType={graphTwoType}
						setGraphTwoType={setGraphTwoType}
					/>
				</Route>
			</Switch>
		</>
	);
}

export default App;
