import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const DataTable = ({ graphData, setGraphData }) => {
	const handleDeleteData = (data) => {
		setGraphData(graphData.filter((item) => item.id !== data));
	};
	return (
		<div>
			{graphData.length > 0 ? (
				<Table variant='dark' responsive>
					<thead>
						<tr>
							<th>Dataset Number</th>
							<th>Dataset Value</th>
						</tr>
					</thead>
					<tbody>
						{graphData.map((value, index) => (
							<tr>
								<td>{++index}</td>
								<td>{value.dataNumber}</td>
								<td>{value.dataName}</td>
								<Button
									class='btn-danger btn'
									onClick={() => handleDeleteData(value.id)}>
									Remove Data
								</Button>
							</tr>
						))}
					</tbody>
				</Table>
			) : (
				<p>Currently There has been no data added to the charts.</p>
			)}
		</div>
	);
};

export default DataTable;
