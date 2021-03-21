import React from 'react';
import { Doughnut, Pie, Bar, Line, Scatter, Radar } from 'react-chartjs-2';
import { GraphType, ColorModal } from './';

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
					<Bar data={data} />
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
					<Doughnut data={data} />
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
					<Line data={data} />
				</>
			);
		case 'scatter':
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
					<Scatter data={data} />
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
					<Radar data={data} />
				</>
			);
		default:
			return <Bar data={data} />;
	}
};

export default Graphs;
