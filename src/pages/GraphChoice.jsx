import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { NoGraphs, Graphs } from '../components/index';

const GraphChoice = () => {
	const [numberOfGraphs, setNumberOfGraphs] = useState(0);
	const [graphOutput, setGraphOutput] = useState({
		graph: <Graphs />,
		dataSetOne: 100,
		dataSetTwo: 200,
	});
	const [listOfGraphs, setListOfGraphs] = useState(null);

	const numberOfGraphsHandler = (e) => {
		console.log(e.target.value);
		if (e.target.value === '') {
			setNumberOfGraphs(0);
		} else {
			if (e.target.value > 5) {
				setNumberOfGraphs(5);
			} else if (e.target.value !== NaN) {
				setNumberOfGraphs(parseInt(e.target.value));
			} else {
				setNumberOfGraphs(0);
			}
		}
	};

	//can use a switch case

	switch (numberOfGraphs) {
		case 1:
			return setListOfGraphs(graphOutput);
		default:
			console.log('nothing');
	}

	return (
		<Container>
			<h1>Please Choose a Graph you want to use</h1>
			<p>
				Welcome to the graphing software, you can select up to five different
				graphs to display your requested data.
			</p>
			{numberOfGraphs !== 0 && numberOfGraphs > 0 ? (
				<p>You have selected {numberOfGraphs} graphs to be used.</p>
			) : (
				<p>There are currently no graphs selected.</p>
			)}
			<Row>
				<Col>
					<input
						onChange={numberOfGraphsHandler}
						type='number'
						className='form-control'
						placeholder='Enter a number between 1-5'
					/>
				</Col>
			</Row>
			<Row>
				<Col>
					{numberOfGraphs === 0 || numberOfGraphs === undefined ? (
						<NoGraphs />
					) : listOfGraphs ? (
						listOfGraphs.graph
					) : (
						<p>Loading....</p>
					)}
				</Col>
			</Row>
		</Container>
	);
};

export default GraphChoice;
