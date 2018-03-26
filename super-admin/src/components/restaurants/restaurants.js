import React from 'react';
// import { connect } from 'react-redux';

import RestaurantsList from './restaurantsList';

import { Divider, Card, Image, Dropdown, Grid, Statistic, Button, Input } from 'semantic-ui-react';

const options = [
  { key: 1, text: 'One', value: 1 },
  { key: 2, text: 'Two', value: 2 },
  { key: 3, text: 'Three', value: 3 },
]

const cards = [
  {
    id: 1,
    color: 'red',
    content: {
      contentImage: {
        uri: 'url',
      },
      contentHeader: {
        textValue: 'Total',
        textColor: 'skyblue',
      },
      contentStatistics: {
        statisticLabel: 'Restaurants',
        statisticValue: '352',
        statisticColor: 'blue',
      },
    },
  }
]
const Restaurants = (props) => {
  return (
    <div>
    <h1>Restaurants</h1>
    <Divider inverted section/>

    <Card.Group itemsPerRow="4">
      <Card color="red" raised>
        <Card.Content>
           <Image floated='right' size='mini' src='https://i.pinimg.com/736x/33/b8/69/33b869f90619e81763dbf1fccc896d8d--lion-logo-modern-logo.jpg' />
          <Card.Header style={{color: 'skyblue'}}>TOTAL</Card.Header>
        </Card.Content>
        <Card.Content>
          <Statistic label='Restaurants' value='352' color="blue"/>
        </Card.Content>
        <Card.Content extra ></Card.Content>
      </Card>

      <Card color="red" raised>
        <Card.Content>
           <Image floated='right' size='mini' src='https://i.pinimg.com/736x/33/b8/69/33b869f90619e81763dbf1fccc896d8d--lion-logo-modern-logo.jpg' />
          <Card.Header style={{color: 'green'}}>ACTIVE</Card.Header>
        </Card.Content>
        <Card.Content>
          <Statistic label='Restaurants' value='352' color="green" />
        </Card.Content>
        <Card.Content extra ></Card.Content>
      </Card>

      <Card color="red" raised>
        <Card.Content>
           <Image floated='right' size='mini' src='https://i.pinimg.com/736x/33/b8/69/33b869f90619e81763dbf1fccc896d8d--lion-logo-modern-logo.jpg' />
          <Card.Header style={{color: 'red'}}>DEACTIVE</Card.Header>
        </Card.Content>
        <Card.Content>
          <Statistic label='Restaurants' value='0' color="red" />
        </Card.Content>
        <Card.Content extra ></Card.Content>
      </Card>

      <Card color="red" raised>
        <Card.Content>
           <Image floated='right' size='mini' src='https://i.pinimg.com/736x/33/b8/69/33b869f90619e81763dbf1fccc896d8d--lion-logo-modern-logo.jpg' />
          <Card.Header style={{color: 'brown'}}>PENDING</Card.Header>
        </Card.Content>
        <Card.Content>
          <Statistic label='Restaurants' value='0' color="brown" />
        </Card.Content>
        <Card.Content extra ></Card.Content>
      </Card>

    </Card.Group>

    <br />

    <Button content='Add Restaurant' secondary floated="right" />

    <Divider clearing />

    <Grid columns={2} style={{marginRight:'10px'}}>
        <Grid.Column>
        <label>Select Restaurant Name: </label>
          <Dropdown
            //onChange={this.handleChange}
            options={options}
            placeholder='Search by restaurant name'
            selection
            //value={value}
            fluid
          />
        </Grid.Column>
        <Grid.Column>
        <label>Sort By: </label>
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
      <br />
          <div>
            <Input icon='search' placeholder='Search...' size='large' style={{width: '85%'}} /> &nbsp;
            <Button content='Search' color='green' size='large' />
          </div>
      <Divider style={{backgroundColor: '#ccc', height: '30px',  marginRight: '10px'}} />

      <RestaurantsList />
    </div>
  )
}

export default Restaurants;
