import React, { useState } from 'react';
import {
	Button,
	Container,
	Row,
	Col,
	Modal,
	FormGroup,
	FormLabel,
} from 'react-bootstrap';
import { NoGraphs, Graphs, DataTable } from '../components/index';
import Draggable from 'react-draggable';
import { v4 as uuidv4 } from 'uuid';
import { HexColorPicker } from 'react-colorful';

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
}) => {
	const [numberOfGraphs, setNumberOfGraphs] = useState(0);
	const [listOfGraphs, setListOfGraphs] = useState(null);
	const [colorPallete, setColorPallete] = useState([]);
	const [colorModal, setColorModal] = useState(false);

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

	const handleColorPallete = () => {
		setColorPallete([
			...colorPallete,
			{ color, id: Math.floor(1000 * Math.random()) },
		]);
	};

	const handleEnterData = (e) => {
		setEnterData(e.target.value);
		if (e.target.value > 3) {
			setColorModal(true);
		}
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
		console.log(graphData);
	};

	const handleRemoveColor = () => {
		colorPallete.filter((colors) => {
			setColorPallete(color !== colors.color);
		});
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
			<p>
				Please enter the name for each piece of data in order, for example if
				your first piece of data is for GME stock and it 100 enter GME and in
				the next box 100.
			</p>
			<p>
				Please enter each piece of data one piece of data at a time and press
				Enter Data.
			</p>
			<FormGroup>
				<Row>
					<Col>
						<FormLabel className='font-weight-bold'>Name of Dataset</FormLabel>
						<input
							className='form-control'
							placeholder='Please enter each piece of data and press submit'
							onChange={handleEnterDataName}
							type='text'
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
						/>
					</Col>
				</Row>
				<Row>
					<Col>
						<FormLabel className='font-weight-bold'>
							Number of Graphs you require
						</FormLabel>
						<input
							onChange={numberOfGraphsHandler}
							type='number'
							className='form-control'
							placeholder='Enter a number between 1-5'
							disabled={graphData.length > 1 ? false : true}
						/>
						<Button onClick={handleSubmitData} type='reset'>
							Enter Data
						</Button>
					</Col>
				</Row>
			</FormGroup>

			<Modal show={colorModal}>
				<Modal.Header
					closeButton
					onClick={() => {
						setColorModal((prev) => !prev);
					}}>
					<Modal.Title>Colour Picker for your Piece of Data</Modal.Title>
				</Modal.Header>
				<Modal.Body className='d-flex'>
					<div>
						<HexColorPicker color={color} onChange={setColor} />
						<p>{color}</p>
						<Button variant='primary' onClick={handleColorPallete}>
							Save Color For Chart
						</Button>
					</div>
					<div>
						{colorPallete.map((col, index) => (
							<div>
								<div
									className='color-box'
									style={{ background: col.color }}></div>
								<p>
									Your Color number {index} is: {col.color}
								</p>

								<Button onClick={handleRemoveColor}>Remove this Color</Button>
							</div>
						))}
					</div>
				</Modal.Body>
			</Modal>

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
