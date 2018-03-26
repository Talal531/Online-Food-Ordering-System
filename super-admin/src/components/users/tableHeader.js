import React from 'react';
import { Table } from 'semantic-ui-react';

const TableHeader = ( {id, userName, emailId} ) => (
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>No.</Table.HeaderCell>
      <Table.HeaderCell>User Name</Table.HeaderCell>
      <Table.HeaderCell>Email</Table.HeaderCell>
      <Table.HeaderCell>Phone</Table.HeaderCell>
      <Table.HeaderCell>Registered Date</Table.HeaderCell>
      <Table.HeaderCell>Status</Table.HeaderCell>
      <Table.HeaderCell>Actions</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
);

export default TableHeader;
