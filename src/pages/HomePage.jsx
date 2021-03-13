import React from 'react';
import { Button, Container, Row, Col, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const HomePage = () => {
	return (
		<>
			<Container fluid>
				<Row>
					<Col>
						<Jumbotron
							className='d-flex justify-content-center align-items-center flex-column px-4'
							fluid>
							<h1>Graphing Software</h1>
							<p>
								To begin selecting the graphing platform you wish to use please
								press continue or to return to our homepage please click return.
							</p>
							<div className='d-flex btn-grp justify-content-around '>
								<a href='#'>
									<Button className='btn-danger'>Click to go home</Button>
								</a>
								<Link to='/graph-choice'>
									<Button>Click to Continue to Graphs</Button>
								</Link>
							</div>
						</Jumbotron>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default HomePage;
