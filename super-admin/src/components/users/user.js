import React from 'react';
import { connect } from 'react-redux';
import { Table, Icon, Button } from 'semantic-ui-react';
import { removeUser } from '../actions/usersAction.js'



const User = ( {dispatch, serialNo, id, userName, emailId, phone, registeredDate } ) => (
      <Table.Row>
        <Table.Cell>{ serialNo }</Table.Cell>
        <Table.Cell>{ userName }</Table.Cell>
        <Table.Cell>{ emailId }</Table.Cell>
        <Table.Cell>{ phone }</Table.Cell>
        <Table.Cell>{ registeredDate }</Table.Cell>
        <Table.Cell>
          <Icon name='checkmark' size='large' color='green' />
        </Table.Cell>
        <Table.Cell>
          <Button.Group>
            <Button compact>Edit</Button>
            <Button.Or />
            <Button
              negative
              compact
              onClick={() => {dispatch(removeUser({ id }))}}
           >Delete</Button>
          </Button.Group>
        </Table.Cell>
      </Table.Row>
)
export default connect()(User);
