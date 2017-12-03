import React, {Component} from 'react';

import {Link} from 'react-router-dom';

import {Image} from 'react-bootstrap';

const City_URL = "http://localhost:3001/home";

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

    this.state = {
      city: [],
      keywords: ''
    }

  }

  componentDidMount() {
    fetch(City_URL, {method: 'GET'})
      .then(response => response.json())
      .then(json => {
        this.setState({city: json.city})
      })
  }

  renderCityLsit = (cityList) => {
    return cityList.map((item, i) => {
      return (
        <Link
          key={item.id}
          to={`/restaurants${item.links}`}
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
    console.log(this.props)
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
          {this.renderCityLsit(this.state.city)}
        </div>
      </div>
    );
  }
}

export default City;
// ////////////////////////////////////////////////////////////////////////

// // @flow weak

// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from 'material-ui/styles';
// import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
// import IconButton from 'material-ui/IconButton';
// import StarBorderIcon from 'material-ui-icons/StarBorder';
// // import tileData from './tileData';
// const City_URL = "http://localhost:3001/home";

// const styles = theme => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     overflow: 'hidden',
//     background: theme.palette.background.paper,
//   },
//   gridList: {
//     flexWrap: 'nowrap',
//     // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
//     transform: 'translateZ(0)',
//   },
//   title: {
//     color: theme.palette.primary[200],
//   },
//   titleBar: {
//     background:
//       'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
//   },
// });

// /**
//  * The example data is structured as follows:
//  *
//  * import image from 'path/to/image.jpg';
//  * [etc...]
//  *
//  */
//   const tileData = [
//     {
//      img: 'https://www.samaa.tv/wp-content/uploads/2016/10/mazar-e-quaid-640x480.jpg',
//      title: 'Image',
//      author: 'author',
//    },
// {
//   img: 'https://www.samaa.tv/wp-content/uploads/2016/10/mazar-e-quaid-640x480.jpg',
//   title: 'Image',
//   author: 'author'
// },
// {
//   img: 'https://www.samaa.tv/wp-content/uploads/2016/10/mazar-e-quaid-640x480.jpg',
//   title: 'Image',
//   author: 'author'
// },
// {
//   img: 'https://www.samaa.tv/wp-content/uploads/2016/10/mazar-e-quaid-640x480.jpg',
//   title: 'Image',
//   author: 'author'
// },
//   ];
// function City(props) {
//   const { classes } = props;

//   return (
//     <div className={classes.root}>
//     <h2>Find Us</h2>
//       <GridList className={classes.gridList} cols={2.5}>
//         {tileData.map(tile => (
//           <GridListTile key={tile.img}>
//             <img src={tile.img} alt={tile.title} />
//             <GridListTileBar
//               title={tile.title}
//               classes={{
//                 root: classes.titleBar,
//                 title: classes.title,
//               }}
//               actionIcon={
//                 <IconButton>
//                   <StarBorderIcon className={classes.title} />
//                 </IconButton>
//               }
//             />
//           </GridListTile>
//         ))}
//       </GridList>
//     </div>
//   );
// }

// City.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(City);