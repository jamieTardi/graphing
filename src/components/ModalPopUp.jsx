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
	{
		companyName,
		setCompanyName,
		companyInfoInput,
		setCompanyInfoInput,
		setNextPage,
	},
	props,
) => {
	const [modal, setModal] = useState(true);

	const { buttonLabel, className } = props;

	const toggle = () => {
		setModal(!modal);
		setNextPage(false);
	};

	const handleSetCompanyInfo = (e) => {
		setCompanyInfoInput(e.target.value);
	};

	const handleCompanyInfo = () => {
		setCompanyName(companyInfoInput);
	};
	return (
		<div>
			<Modal isOpen={modal} toggle={toggle} className={className}>
				<ModalHeader toggle={toggle}>Company Information</ModalHeader>
				<ModalBody>
					Thank you for taking the time to use this graphing software, to get
					personalised graphs please enter your company name in the provided
					input box.
				</ModalBody>
				<div class='d-flex justify-content-center align-items-center'>
					<FormGroup className='d-flex justify-content-center align-items-center flex-column'>
						<Label for='company name'>Insert Your Company Name</Label>
						<Input
							type='text'
							name='name'
							id='name'
							onChange={handleSetCompanyInfo}
							className='mb-3'
						/>
						{companyInfoInput ? (
							<Button
								color='primary'
								className='mb-2 btn btn-primary modal-submit-btn'
								onClick={handleCompanyInfo}>
								Submit Company name
							</Button>
						) : (
							<Button
								color='primary'
								className='mb-2 btn btn-primary modal-submit-btn'
								disabled>
								Submit Company name
							</Button>
						)}
					</FormGroup>
				</div>
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
