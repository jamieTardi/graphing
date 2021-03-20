import React from 'react';
import { Doughnut, Pie, Bar, Line, Scatter, Radar } from 'react-chartjs-2';
import { GraphType } from './';

const Graphs = ({
	graphOneType,
	setGraphOneType,
	graphTwoType,
	setGraphTwoType,
	graphData,
}) => {
	let dataNumberArray = [];
	let dataNameArray = [];

	graphData.forEach((element) => {
		dataNumberArray.push(parseInt(element.dataNumber));
		dataNameArray.push(element.dataName);
	});
	console.log(dataNumberArray);
	const data = {
		labels: dataNameArray,
		datasets: [
			{
				label: 'First dataset',
				data: dataNumberArray,
				fill: true,
				backgroundColor: 'rgba(75,192,192,0.2)',
				borderColor: 'rgba(75,192,192,1)',
			},
		],
	};

	switch (graphOneType[0] || graphTwoType[0]) {
		case 'pie':
			return (
				<>
					<GraphType setGraphOneType={setGraphOneType} />

					<Pie data={data} />
				</>
			);
		case 'bar':
			return (
				<>
					<GraphType setGraphOneType={setGraphOneType} />
					<Bar data={data} />
				</>
			);
		case 'doughnut':
			return (
				<>
					<GraphType setGraphOneType={setGraphOneType} />
					<Doughnut data={data} />
				</>
			);
		case 'line':
			return (
				<>
					<GraphType setGraphOneType={setGraphOneType} />
					<Line data={data} />
				</>
			);
		case 'scatter':
			return (
				<>
					<GraphType setGraphOneType={setGraphOneType} />
					<Scatter data={data} />
				</>
			);
		case 'radar':
			return (
				<>
					<GraphType setGraphOneType={setGraphOneType} />
					<Radar data={data} />
				</>
			);
		default:
			return <Bar data={data} />;
	}
};

export default Graphs;
