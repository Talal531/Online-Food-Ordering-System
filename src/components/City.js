import React, {Component} from 'react';

import {Link} from 'react-router-dom';

import {Image} from 'react-bootstrap';


//============================================================
const style = {
  city_component: {
    maxHeight: '800px'
  },
  city_container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  city_item: {
    width: '25%',
    padding: '30px',
    boxSizing: 'border-box'
  },
  item_image: {
    width: '100%'
  }
}

class City extends Component {
  constructor(props) {
    super(props);

  }

  renderCityLsit = (cityList) => {
    return cityList.map((item, i) => {
      return (
        <Link
          key={item.id}
          to={`${item.links}/restaurants`}
          style={{
          width: '250px',
          height: '200px',
          padding: '10px',
          boxSizing: 'border-box'
        }}>
          <Image
            src={item.img}
            alt={item.title}
            style={{
            width: '100%'
          }}/>

        </Link>
      );
    })
  }
  render() {
    return (
      <div style={{
        minHeight: '600px'
      }}>
        <div className="city_component_text">
          <h2>
            Find Us in your City..
          </h2>
        </div>
        <div
          style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around'
        }}>
          {this.renderCityLsit(this.props.allCity)}
        </div>
      </div>
    );
  }
}

export default City;
// ////////////////////////////////////////////////////////////////////////
