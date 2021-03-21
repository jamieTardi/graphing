import React from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';
import barChart from '../assets/icons/bar-chart.svg';
import donut from '../assets/icons/donut.svg';
import lineChart from '../assets/icons/line-chart.svg';
import pieChart from '../assets/icons/pie-chart.svg';
import scatter from '../assets/icons/scatter.svg';
import radar from '../assets/icons/radar.svg';

const GraphType = ({ setGraphOneType }) => {
	return (
		<Container>
			<Row className='mb-3'>
				<Col className='mb-3 d-flex justify-content-center align-items-center flex-column'>
					<Image
						className='svg-images'
						src={barChart}
						onClick={() => {
							setGraphOneType(['bar']);
						}}
					/>
					<h5>Bar Chart</h5>
				</Col>
				<Col className='mb-3 d-flex justify-content-center align-items-center flex-column'>
					<Image
						className='svg-images'
						src={donut}
						onClick={() => {
							setGraphOneType(['doughnut']);
						}}
					/>
					<h5>Doughnut Chart</h5>
				</Col>
				<Col className='mb-3 d-flex justify-content-center align-items-center flex-column'>
					<Image
						className='svg-images'
						src={lineChart}
						className='svg-images'
						src={lineChart}
						onClick={() => {
							setGraphOneType(['line']);
						}}
					/>
					<h5>Line Chart</h5>
				</Col>
			</Row>
			<Row>
				<Col className='mb-3 d-flex justify-content-center align-items-center flex-column'>
					<Image
						className='svg-images'
						src={pieChart}
						onClick={() => {
							setGraphOneType(['pie']);
						}}
					/>
					<h5>Pie Chart</h5>
				</Col>
				<Col className='mb-3 d-flex justify-content-center align-items-center flex-column'>
					<Image
						className='svg-images '
						src={scatter}
						onClick={() => {
							setGraphOneType(['scatter']);
						}}
					/>
					<h5>Scatter Graph</h5>
				</Col>
				<Col className='mb-3 d-flex justify-content-center align-items-center flex-column'>
					<Image
						className='svg-images'
						src={radar}
						onClick={() => {
							setGraphOneType(['radar']);
						}}
					/>
					<h5>Radar Graph</h5>
				</Col>
			</Row>
		</Container>
	);
};

export default GraphType;
