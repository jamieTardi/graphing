import React from 'react';
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import barHero from '../assets/images/bar-chart-main.svg';
import { Doughnut, Pie, Bar, Line, Scatter } from 'react-chartjs-2';
import { graphData } from '../lib/graphData';
import { GraphType } from './';

const Graphs = ({ graphOneType, setGraphOneType }) => {
	const graphOneData = graphData[0];
	const data = {
		labels: ['Dataset 1', 'Dataset 2', 'Dataset 3'],
		datasets: [
			{
				label: 'First dataset',
				data: [
					graphOneData.dataSet1,
					graphOneData.dataSet2,
					graphOneData.dataSet3,
				],
				fill: true,
				backgroundColor: 'rgba(75,192,192,0.2)',
				borderColor: 'rgba(75,192,192,1)',
			},
			{
				label: 'Second dataset',
				data: [33, 25, 35, 51, 54, 76],
				fill: false,
				borderColor: '#742774',
			},
		],
	};

	switch (graphOneType) {
		case 'pie':
			return (
				<>
					<GraphType setGraphOneType={setGraphOneType} />

					<Pie data={data} />
				</>
			);
		case 'bar':
			return (
				<>
					<GraphType setGraphOneType={setGraphOneType} />
					<Bar data={data} />
				</>
			);
		case 'doughnut':
			return (
				<>
					<GraphType setGraphOneType={setGraphOneType} />
					<Doughnut data={data} />
				</>
			);
		case 'line':
			return (
				<>
					<GraphType setGraphOneType={setGraphOneType} />
					<Line data={data} />
				</>
			);
		default:
			return <Bar data={data} />;
	}
};

export default Graphs;
