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

const NoGraphs = () => {
	return (
		<div className='card-container d-flex justify-content-center align-items-center'>
			<Card className='mt-4 p-2'>
				<CardImg top src={barHero} alt='bar chart image' />
				<CardBody className='d-flex flex-column justify-content-center align-items-center'>
					<CardTitle>Graph Selection</CardTitle>
					<CardSubtitle tag='h6' className='mb-2 text-muted'>
						Currently no graphs have been selected
					</CardSubtitle>
					<CardText>
						To select the graphs you want please select a number from the input
						box at the top of the page.
					</CardText>
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

export default NoGraphs;
