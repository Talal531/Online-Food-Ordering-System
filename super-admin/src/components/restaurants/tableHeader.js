import React from 'react';
import { Table } from 'semantic-ui-react';

const TableHeader = ( {id, restaurantName, restaurantAddress} ) => (
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>No.</Table.HeaderCell>
      <Table.HeaderCell>Restaurant Name</Table.HeaderCell>
      <Table.HeaderCell>Restaurant Address</Table.HeaderCell>
      <Table.HeaderCell>Restaurant Number</Table.HeaderCell>
      <Table.HeaderCell>Manager Name</Table.HeaderCell>
      <Table.HeaderCell>Owner Name</Table.HeaderCell>
      <Table.HeaderCell>Countary</Table.HeaderCell>
      <Table.HeaderCell>City</Table.HeaderCell>
      <Table.HeaderCell>Options</Table.HeaderCell>
      <Table.HeaderCell>Status</Table.HeaderCell>
      <Table.HeaderCell>Actions</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
);

export default TableHeader;
