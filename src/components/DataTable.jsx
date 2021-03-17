import React from 'react';
import { Table, Button } from 'react-bootstrap';

const DataTable = ({ graphData }) => {
	return (
		<div>
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
							<td>{value}</td>
							<Button class='btn-danger btn'>Remove Data</Button>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default DataTable;
