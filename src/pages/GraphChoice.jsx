import React, { useState } from 'react';
import {
	Button,
	Container,
	Row,
	Col,
	Modal,
	FormGroup,
	FormLabel,
	Form,
} from 'react-bootstrap';
import { NoGraphs, Graphs, DataTable } from '../components/index';
import Draggable from 'react-draggable';
import { v4 as uuidv4 } from 'uuid';

const GraphChoice = ({
	companyName,
	graphOneType,
	setGraphOneType,
	enterData,
	setEnterData,
	graphData,
	setGraphData,
	dataName,
	setDataName,
	color,
	setColor,
	setColorModal,
	colorModal,
}) => {
	const [numberOfGraphs, setNumberOfGraphs] = useState(0);
	const [listOfGraphs, setListOfGraphs] = useState(null);
	const [colorPallete, setColorPallete] = useState([]);

	const numberOfGraphsHandler = (e) => {
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
	const handleEnterDataName = (e) => {
		setDataName(e.target.value);
	};

	const handleSubmitData = () => {
		setGraphData([
			...graphData,
			{
				id: uuidv4(),
				dataName: dataName,
				dataNumber: enterData,
			},
		]);
	};

	//Switch case statement,
	switch (numberOfGraphs) {
		case 1:
			return (
				<Graphs
					graphOneType={graphOneType}
					setGraphOneType={setGraphOneType}
					graphData={graphData}
					color={color}
					setColorModal={setColorModal}
					colorModal={colorModal}
					setColor={setColor}
					colorPallete={colorPallete}
					setColorPallete={setColorPallete}
				/>
			);
		case 2:
			return (
				<>
					<Graphs
						graphOneType={graphOneType}
						setGraphOneType={setGraphOneType}
						graphData={graphData}
						color={color}
						setColorModal={setColorModal}
						colorModal={colorModal}
					/>
					<Graphs
						graphOneType={graphOneType}
						setGraphOneType={setGraphOneType}
						graphData={graphData}
					/>
				</>
			);
		default:
			<NoGraphs />;
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
			<p>
				Please enter the name for each piece of data in order, for example if
				your first piece of data is for GME stock and the value is 100 enter GME
				in the first input box and in the next box 100.
			</p>
			<p>
				Please enter each piece of data one piece of data at a time and press
				Enter Data.
			</p>
			<Form>
				<FormGroup>
					<Row>
						<Col>
							<FormLabel className='font-weight-bold'>
								Name of Dataset
							</FormLabel>
							<input
								className='form-control'
								placeholder='Please enter each piece of data and press submit'
								onChange={handleEnterDataName}
								type='text'
								required
							/>
						</Col>
					</Row>

					<Row>
						<Col>
							<FormLabel className='font-weight-bold'>
								Number in Dataset
							</FormLabel>
							<input
								className='form-control'
								placeholder='Please enter each piece of data and press submit'
								onChange={handleEnterData}
								type='number'
								required
							/>
						</Col>
					</Row>
					<Button onClick={handleSubmitData} type='reset'>
						Enter Data
					</Button>
					<Row>
						<Col>
							<FormLabel className='font-weight-bold'>
								Number of Graphs you require
							</FormLabel>
							{graphData.length >= 2 ? (
								<>
									<Form.Control as='select' custom>
										<option onClick={numberOfGraphsHandler}>1</option>
										<option onClick={numberOfGraphsHandler}>2</option>
										<option onClick={numberOfGraphsHandler}>3</option>
										<option onClick={numberOfGraphsHandler}>4</option>
										<option onClick={numberOfGraphsHandler}>5</option>
									</Form.Control>
								</>
							) : (
								<>
									<p>
										Please enter at least 2 datasets of information in the graph
										data boxes above.
									</p>
									<Form.Control as='select' disabled custom></Form.Control>
								</>
							)}
						</Col>
					</Row>
				</FormGroup>
			</Form>

			<DataTable graphData={graphData} setGraphData={setGraphData} />
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
