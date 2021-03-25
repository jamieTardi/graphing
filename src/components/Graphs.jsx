import React from 'react';
import { Doughnut, Pie, Bar, Line, Polar, Radar } from 'react-chartjs-2';
import { GraphType, ColorModal } from './';
import { Button } from 'react-bootstrap';
import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer';

const Graphs = ({
	graphOneType,
	setGraphOneType,
	graphTwoType,
	setGraphTwoType,
	graphData,
	color,
	colorPallete,
	setColorPallete,
	setColorModal,
	colorModal,
	setColor,
}) => {
	let dataNumberArray = [];
	let dataNameArray = [];

	graphData.forEach((element) => {
		dataNumberArray.push(parseInt(element.dataNumber));
		dataNameArray.push(element.dataName);
	});
	const data = {
		labels: dataNameArray,
		datasets: [
			{
				label: 'First dataset',
				data: dataNumberArray,
				fill: true,
				backgroundColor: colorPallete,
				borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
			},
		],
	};
	const handleColorPallete = () => {
		setColorPallete([...colorPallete, color]);
	};
	const deleteColor = () => {
		setColorPallete((currentColors) => currentColors.filter((item) => !item));
	};
	console.log(colorPallete);
	switch (graphOneType[0] || graphTwoType[0]) {
		case 'pie':
			return (
				<>
					<Document>
						<Page>
							<ColorModal
								setColorPallete={setColorPallete}
								colorPallete={colorPallete}
								color={color}
								deleteColor={deleteColor}
								colorModal={colorModal}
								setColorModal={setColorModal}
								handleColorPallete={handleColorPallete}
								setColor={setColor}
							/>

							<GraphType setGraphOneType={setGraphOneType} />
							<div
								onClick={() => {
									setColorModal((prev) => !prev);
								}}>
								<Pie data={data} />
							</div>
							<Button>Click to create PDF</Button>
						</Page>
					</Document>
					<div>
						<div>
							<PDFDownloadLink document={<Page />} fileName='somename.pdf'>
								{({ blob, url, loading, error }) =>
									loading ? 'Loading document...' : 'Download now!'
								}
							</PDFDownloadLink>
						</div>
					</div>
				</>
			);
		case 'bar':
			return (
				<>
					<ColorModal
						setColorPallete={setColorPallete}
						colorPallete={colorPallete}
						color={color}
						deleteColor={deleteColor}
						colorModal={colorModal}
						setColorModal={setColorModal}
						handleColorPallete={handleColorPallete}
						setColor={setColor}
					/>
					<GraphType setGraphOneType={setGraphOneType} />
					<div
						onClick={() => {
							setColorModal((prev) => !prev);
						}}>
						<Bar data={data} />
					</div>
					<Button>Click to create PDF</Button>
				</>
			);
		case 'doughnut':
			return (
				<>
					<ColorModal
						setColorPallete={setColorPallete}
						colorPallete={colorPallete}
						color={color}
						deleteColor={deleteColor}
						colorModal={colorModal}
						setColorModal={setColorModal}
						handleColorPallete={handleColorPallete}
						setColor={setColor}
					/>
					<GraphType setGraphOneType={setGraphOneType} />
					<div
						onClick={() => {
							setColorModal((prev) => !prev);
						}}>
						<Doughnut data={data} />
					</div>
					<Button>Click to create PDF</Button>
				</>
			);
		case 'line':
			return (
				<>
					<ColorModal
						setColorPallete={setColorPallete}
						colorPallete={colorPallete}
						color={color}
						deleteColor={deleteColor}
						colorModal={colorModal}
						setColorModal={setColorModal}
						handleColorPallete={handleColorPallete}
						setColor={setColor}
					/>
					<GraphType setGraphOneType={setGraphOneType} />
					<div
						onClick={() => {
							setColorModal((prev) => !prev);
						}}>
						<Line data={data} />
					</div>
					<Button>Click to create PDF</Button>
				</>
			);
		case 'polar':
			return (
				<>
					<ColorModal
						setColorPallete={setColorPallete}
						colorPallete={colorPallete}
						color={color}
						deleteColor={deleteColor}
						colorModal={colorModal}
						setColorModal={setColorModal}
						handleColorPallete={handleColorPallete}
						setColor={setColor}
					/>
					<GraphType setGraphOneType={setGraphOneType} />
					<div
						onClick={() => {
							setColorModal((prev) => !prev);
						}}>
						<Polar data={data} />
					</div>
					<Button>Click to create PDF</Button>
				</>
			);
		case 'radar':
			return (
				<>
					<ColorModal
						setColorPallete={setColorPallete}
						colorPallete={colorPallete}
						color={color}
						deleteColor={deleteColor}
						colorModal={colorModal}
						setColorModal={setColorModal}
						handleColorPallete={handleColorPallete}
						setColor={setColor}
					/>
					<GraphType setGraphOneType={setGraphOneType} />
					<div
						onClick={() => {
							setColorModal((prev) => !prev);
						}}>
						<Radar data={data} />
					</div>
					<Button>Click to create PDF</Button>
				</>
			);
		default:
			return <Bar data={data} />;
	}
};

export default Graphs;
