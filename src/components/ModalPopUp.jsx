import React, { useState } from 'react';
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Form,
	FormGroup,
	Label,
	Input,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const ModalPopUp = (
	{ companyName, setCompanyName, companyInfoInput, setCompanyInfoInput },
	props,
) => {
	const [modal, setModal] = useState(true);

	const { buttonLabel, className } = props;

	const toggle = () => setModal(!modal);

	const handleSetCompanyInfo = (e) => {
		setCompanyInfoInput(e.target.value);
		console.log(companyInfoInput);
	};

	const handleCompanyInfo = () => {
		setCompanyName(companyInfoInput);
	};
	return (
		<div>
			<Modal isOpen={modal} toggle={toggle} className={className}>
				<ModalHeader toggle={toggle}>Modal title</ModalHeader>
				<ModalBody>
					Thank you for taking the time to use this graphing software, to get
					personalised graphs please enter your company name in the provided
					input box.
				</ModalBody>
				<FormGroup>
					<Label for='company name'>Company Name</Label>
					<Input
						type='text'
						name='name'
						id='name'
						onChange={handleSetCompanyInfo}
					/>
					{companyInfoInput ? (
						<Button color='primary' onClick={handleCompanyInfo}>
							Submit Company name
						</Button>
					) : (
						<Button color='primary' disabled>
							Submit Company name
						</Button>
					)}
				</FormGroup>
				<ModalFooter>
					{companyName ? (
						<Link to='/graph-choice'>
							<Button color='primary' onClick={toggle}>
								Continue
							</Button>
						</Link>
					) : (
						<Button color='primary' disabled onClick={toggle}>
							Continue
						</Button>
					)}

					<Button color='secondary' onClick={toggle}>
						Cancel
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
};

export default ModalPopUp;
