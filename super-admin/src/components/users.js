import React from 'react';
import { Divider, Dropdown, Grid, Table, Icon } from 'semantic-ui-react'

const options = [
  { key: 1, text: 'Id', value: 1 },
  { key: 2, text: 'User Name', value: 2 },
  { key: 3, text: 'Email Id', value: 3 },
  { key: 4, text: 'Phone', value: 4 },
  { key: 5, text: 'Registered Date', value: 5 },
]


const Users = () => {
  return (
    <div>
    <h1>Users</h1>
    <Divider inverted section/>
    <Grid columns={1} style={{marginRight:'10px'}}>
        <Grid.Column>
          <label><h3>Sort By: </h3></label>
        <Dropdown
          //onChange={this.handleChange}
          options={options}
          placeholder='Sort by'
          selection
          //value={value}
          fluid
        />
        </Grid.Column>
      </Grid>

      <Divider style={{backgroundColor: '#ccc', height: '30px',  marginRight: '10px'}} />

      <div style={{marginRight:'10px'}}>
      <Table celled striped textAlign="center">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell rowSpan='2'>Id</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2'>User Name</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2'>Email Id</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2'>Phone</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2'>Registered Date</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2'>Status</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2'>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
     <Table.Row>
       <Table.Cell>1</Table.Cell>
       <Table.Cell>John</Table.Cell>
       <Table.Cell>Jhon@gmail.com</Table.Cell>
       <Table.Cell>1234153</Table.Cell>
       <Table.Cell>May 10, 2017</Table.Cell>
       <Table.Cell>
        <Icon name='checkmark' size='large' color='green' />
      </Table.Cell>
       <Table.Cell>
        <Icon name='edit' size='large'/>
        <Icon name='delete' size='large' color='red'/>
       </Table.Cell>
     </Table.Row>
     <Table.Row>
       <Table.Cell>2</Table.Cell>
       <Table.Cell>Johne</Table.Cell>
       <Table.Cell>Jhon@gmail.com</Table.Cell>
       <Table.Cell>1234153</Table.Cell>
       <Table.Cell>May 10, 2017</Table.Cell>
       <Table.Cell>
        <Icon name='checkmark' size='large' color='green' />
      </Table.Cell>
       <Table.Cell>
        <Icon name='edit' size='large'/>
        <Icon name='delete' size='large' color='red'/>
       </Table.Cell>
     </Table.Row>
     <Table.Row>
       <Table.Cell>3</Table.Cell>
       <Table.Cell>John</Table.Cell>
       <Table.Cell>Jhon@gmail.com</Table.Cell>
       <Table.Cell>1234153</Table.Cell>
       <Table.Cell>May 10, 2017</Table.Cell>
       <Table.Cell>
        <Icon name='checkmark' size='large' color='green' />
      </Table.Cell>
       <Table.Cell>
        <Icon name='edit' size='large'/>
        <Icon name='delete' size='large' color='red'/>
       </Table.Cell>
     </Table.Row>
     <Table.Row>
       <Table.Cell>4</Table.Cell>
       <Table.Cell>Johne</Table.Cell>
       <Table.Cell>Jhon@gmail.com</Table.Cell>
       <Table.Cell>1234153</Table.Cell>
       <Table.Cell>May 10, 2017</Table.Cell>
       <Table.Cell>
        <Icon name='checkmark' size='large' color='green' />
      </Table.Cell>
       <Table.Cell>
        <Icon name='edit' size='large'/>
        <Icon name='delete' size='large' color='red'/>
       </Table.Cell>
     </Table.Row>
     <Table.Row>
       <Table.Cell>5</Table.Cell>
       <Table.Cell>Johne</Table.Cell>
       <Table.Cell>Jhon@gmail.com</Table.Cell>
       <Table.Cell>1234153</Table.Cell>
       <Table.Cell>May 10, 2017</Table.Cell>
       <Table.Cell>
        <Icon name='checkmark' size='large' color='green' />
      </Table.Cell>
       <Table.Cell>
        <Icon name='edit' size='large'/>
        <Icon name='delete' size='large' color='red'/>
       </Table.Cell>
     </Table.Row>
   </Table.Body>
      </Table>
      </div>

    </div>
  )
}

export default Users;
