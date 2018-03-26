import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Table, Icon, Button } from 'semantic-ui-react';
import { removeRestaurant } from '../actions/restaurantsAction';


const Restaurant = ( {dispatch, match, serialNo, id, restaurantName, restaurantAddress, restaurantNumber, managerName, ownerName, countary, options, city } ) => (
      <Table.Row>
        <Table.Cell>{ serialNo }</Table.Cell>
        <Table.Cell>{ restaurantName }</Table.Cell>
        <Table.Cell>{ restaurantAddress }</Table.Cell>
        <Table.Cell>{ restaurantNumber }</Table.Cell>
        <Table.Cell>{ managerName }</Table.Cell>
        <Table.Cell>{ ownerName }</Table.Cell>
        <Table.Cell>{ countary }</Table.Cell>
        <Table.Cell>{ city }</Table.Cell>
        <Table.Cell>
          {options.map((option, index) => {
            return <Link key={index} to={`restaurants/${option.replace(/\s+/g, '-').toLowerCase()}`}>&nbsp;{option}&nbsp;&#8642;</Link>
          })}
        </Table.Cell>
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
              onClick={() => {dispatch(removeRestaurant({ id }))
           }}
           >Delete</Button>
          </Button.Group>
        </Table.Cell>
      </Table.Row>
)
export default connect()(Restaurant);
