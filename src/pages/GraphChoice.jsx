import React, { useState } from 'react';
import { Button, Container, Row, Col, Table } from 'react-bootstrap';
import { NoGraphs, Graphs, DataTable } from '../components/index';
import Draggable from 'react-draggable';

const GraphChoice = ({
	companyName,
	graphOneType,
	setGraphOneType,
	enterData,
	setEnterData,
	graphData,
	setGraphData,
}) => {
	const [numberOfGraphs, setNumberOfGraphs] = useState(0);
	const [listOfGraphs, setListOfGraphs] = useState(null);

	console.log(graphData);

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

	const handleEnterData = (e) => {
		setEnterData(e.target.value);
	};

	const handleSubmitData = (e) => {
		setGraphData([...graphData, enterData]);
		console.log(graphData);
	};

	//Switch case statement,
	switch (numberOfGraphs) {
		case 1:
			return (
				<Graphs
					graphOneType={graphOneType}
					setGraphOneType={setGraphOneType}
					graphData={graphData}
				/>
			);
		case 2:
			return (
				<>
					<Graphs
						graphOneType={graphOneType}
						setGraphOneType={setGraphOneType}
						graphData={graphData}
					/>
					<Graphs
						graphOneType={graphOneType}
						setGraphOneType={setGraphOneType}
						graphData={graphData}
					/>
				</>
			);
		default:
			console.log('nothing');
	}

	return (
		<Container>
			<h1>Please Choose a Graph you want to use</h1>
			<p>
				Welcome {companyName} to the graphing software, you can select up to
				five different graphs to display your requested data.
			</p>
			{numberOfGraphs !== 0 && numberOfGraphs > 0 ? (
				<p>You have selected {numberOfGraphs} graphs to be used.</p>
			) : (
				<p>There are currently no graphs selected.</p>
			)}
			<form>
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
						<p>
							Please enter each piece of data one piece of data at a time and
							press submit.
						</p>
						<input
							className='form-control'
							placeholder='Please enter each piece of data and press submit'
							onChange={handleEnterData}
							type='number'
						/>
						<Button onClick={handleSubmitData} type='reset'>
							Enter Data
						</Button>
					</Col>
				</Row>
				<Row>
					<Col>
						<p>
							Please enter the name for each piece of data in order, for example
							if your first piece of data is for GME stock and it 100 enter GME
							and in the next box 100.
						</p>
						<input
							className='form-control'
							placeholder='Please enter each piece of data and press submit'
							onChange={handleEnterData}
							type='text'
						/>
						<Button onClick={handleSubmitData} type='reset'>
							Enter Data
						</Button>
					</Col>
				</Row>
			</form>
			<DataTable graphData={graphData} />
			<Row>
				<Col>
					{numberOfGraphs === 0 || numberOfGraphs === undefined ? (
						<NoGraphs />
					) : listOfGraphs ? (
						<p>Graph</p>
					) : (
						<p>Loading....</p>
					)}
				</Col>
			</Row>
		</Container>
	);
};

export default GraphChoice;
