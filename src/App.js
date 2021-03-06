import React, { useState } from 'react';
import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Switch, Route } from 'react-router-dom';
import { GraphChoice, HomePage } from './pages/index';

function App() {
	const [enterData, setEnterData] = useState(0);
	const [graphData, setGraphData] = useState([]);
	const [companyName, setCompanyName] = useState(null);
	const [companyInfoInput, setCompanyInfoInput] = useState(null);
	const [nextPage, setNextPage] = useState(false);
	const [graphOneType, setGraphOneType] = useState(['pie']);
	const [graphTwoType, setGraphTwoType] = useState(['bar']);
	const [dataName, setDataName] = useState('');
	const [color, setColor] = useState('rgba(255, 0, 0, 1)');
	const [colorModal, setColorModal] = useState(false);

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
					<GraphChoice
						companyName={companyName}
						graphOneType={graphOneType}
						setGraphOneType={setGraphOneType}
						graphTwoType={graphTwoType}
						setGraphTwoType={setGraphTwoType}
						enterData={enterData}
						setEnterData={setEnterData}
						graphData={graphData}
						setGraphData={setGraphData}
						dataName={dataName}
						setDataName={setDataName}
						color={color}
						setColor={setColor}
						colorModal={colorModal}
						setColorModal={setColorModal}
					/>
				</Route>
			</Switch>
		</>
	);
}

export default App;
