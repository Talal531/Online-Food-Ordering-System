import React from 'react';
import { Divider, Dropdown, Grid } from 'semantic-ui-react'
import UserList from './userList';

const options = [
  { key: 1, text: 'Id', value: 1 },
  { key: 2, text: 'User Name', value: 2 },
  { key: 3, text: 'Email Id', value: 3 },
  { key: 4, text: 'Phone', value: 4 },
  { key: 5, text: 'Registered Date', value: 5 },
]


const Users = (props) => {
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

      <UserList />
    </div>
  )
}


export default Users;
