import React, { Component } from 'react';
import Restaurant from './restaurant';
import TableHeader from './tableHeader';

import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';

class RestaurantsList extends Component {
  render () {
    return (
        <div style={{marginRight:'10px'}}>
          <h1>Restaurants: </h1>

          <Table celled striped textAlign="center">
            <TableHeader {...this.props.restaurants[0]} />

            <Table.Body>

              {this.props.restaurants.map((restaurant, index) => {
                return <Restaurant key={restaurant.id} {...restaurant} serialNo={index+1} />
              } )}

            </Table.Body>
          </Table>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants
  }
}
export default connect(mapStateToProps)(RestaurantsList);
