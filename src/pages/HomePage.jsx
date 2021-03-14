import React, { useState } from 'react';
import { Button, Container, Row, Col, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ModalPopUp } from '../components/';
const HomePage = ({
	companyName,
	setCompanyName,
	companyInfoInput,
	setCompanyInfoInput,
}) => {
	const [nextPage, setNextPage] = useState(false);

	return (
		<>
			<Container
				fluid
				class='d-flex justify-content-center align-items-centers home-container'>
				<Row>
					<Col class='d-flex justify-content-center align-content-center'>
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

								<Button
									onClick={() => {
										setNextPage(true);
									}}>
									Click to Continue to Graphs
								</Button>
							</div>
						</Jumbotron>
					</Col>
				</Row>
				{nextPage ? (
					<ModalPopUp
						companyInfoInput={companyInfoInput}
						companyName={companyName}
						setCompanyName={setCompanyName}
						setCompanyInfoInput={setCompanyInfoInput}
					/>
				) : (
					<h1>Please Enter Your Information</h1>
				)}
			</Container>
		</>
	);
};

export default HomePage;
