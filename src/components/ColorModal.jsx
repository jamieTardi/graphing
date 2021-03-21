import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { HexColorPicker } from 'react-colorful';

const ColorModal = ({
	setColorPallete,
	colorPallete,
	color,
	colorModal,
	setColorModal,
	setColor,
	deleteColor,
}) => {
	const handleColorPallete = () => {
		setColorPallete([...colorPallete, color]);
	};
	return (
		<>
			<Modal show={colorModal}>
				<Modal.Header
					closeButton
					onClick={() => {
						setColorModal((prev) => !prev);
					}}>
					<Modal.Title>Colour Picker for your Chart Data</Modal.Title>
				</Modal.Header>
				<Modal.Body className='d-flex'>
					<div>
						<HexColorPicker color={color} onChange={setColor} />
						<p>The Hex Code is: {color}</p>
						<Button variant='primary' onClick={handleColorPallete}>
							Add Color to Pallete
						</Button>
					</div>
					<div className='d-flex flex-column justify-content-center align-items-center'>
						{colorPallete.map((col, index) => (
							<div className='d-flex flex-column justify-content-center align-items-center'>
								<div
									className='color-box'
									style={{ background: col.color }}></div>
								<p>
									Your Color number {++index} is: {col.color}
								</p>
							</div>
						))}
						{colorPallete.length > 0 ? (
							<Button onClick={deleteColor}>Delete all colors</Button>
						) : (
							''
						)}
					</div>
				</Modal.Body>
				<Button className='btn-success' onClick={() => setColorModal(false)}>
					Save selected colors for charts
				</Button>
			</Modal>
		</>
	);
};

export default ColorModal;
