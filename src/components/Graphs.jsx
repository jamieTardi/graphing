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
import { Doughnut } from 'react-chartjs-2';
import { graphData } from '../lib/graphData';

const Graphs = () => {
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

	return (
		<div className='card-container d-flex justify-content-center align-items-center'>
			<Doughnut data={data} />
		</div>
	);
};

export default Graphs;
