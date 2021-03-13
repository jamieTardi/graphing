import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

const GraphChoice = () => {
	const [numberOfGraphs, setNumberOfGraphs] = useState(0);

	const numberOfGraphsHandler = (e) => {
		setNumberOfGraphs(e.target.value);
		if (numberOfGraphs > 5) {
			setNumberOfGraphs(5);
		}
	};

	//can use a switch case
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
						class='form-control'
						placeholder='Enter a number'
					/>
				</Col>
			</Row>
		</Container>
	);
};

export default GraphChoice;
