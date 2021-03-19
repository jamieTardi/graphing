import React from 'react';
import { Table, Button } from 'react-bootstrap';

const DataTable = ({ graphData }) => {
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
								{console.log(value)}
								<td>{++index}</td>
								<td>{value.dataNumber}</td>
								<td>{value.dataName}</td>
								<Button class='btn-danger btn'>Remove Data</Button>
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
