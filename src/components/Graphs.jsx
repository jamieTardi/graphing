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
import { graphData } from '../lib/graphData';

const Graphs = () => {
	const graphOneData = graphData[0];
	console.log(graphOneData);
	return (
		<div className='card-container d-flex justify-content-center align-items-center'>
			<Card className='mt-4 p-2'>
				<CardImg top src={barHero} alt='bar chart image' />
				<CardBody className='d-flex flex-column justify-content-center align-items-center'>
					<CardTitle>Your Graph</CardTitle>
					<CardSubtitle tag='h6' className='mb-2 text-muted'>
						This is a graph.
					</CardSubtitle>
					<CardText>Some Graph Information</CardText>
					<Link to='/'>
						<Button className='btn-success'>
							Click me to go to the Home Page
						</Button>
					</Link>
				</CardBody>
			</Card>
		</div>
	);
};

export default Graphs;
