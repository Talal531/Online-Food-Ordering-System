// import React, {Component} from 'react';

// import {Link} from 'react-router-dom';

// import {Image} from 'react-bootstrap';
// import Tooltip from 'material-ui/Tooltip';

// //============================================================
// const style = {
//   city_component: {
//     maxHeight: '800px'
//   },
//   city_container: {
//     display: 'flex',
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between'
//   },
//   city_item: {
//     width: '25%',
//     padding: '30px',
//     boxSizing: 'border-box'
//   },
//   item_image: {
//     width: '100%'
//   }
// }

// class City extends Component {
//   constructor(props) {
//     super(props);

//   }

//   renderCityLsit = (cityList) => {
//     return cityList.map((item, i) => {
//       return (
//         <Tooltip
//           style={{
//           width: '250px',
//           height: '200px',
//           padding: '5px',
//           boxSizing: 'border-box'
//         }}
//           id="tooltip-bottom-end"
//           title={item.title}
//           placement="bottom">

//           <Link key={item.id} to={`${item.links}/restaurants`}>
//             <Image
//               src={item.img}
//               alt={item.title}
//               style={{
//               width: '100%'
//             }}/>

//           </Link>
//         </Tooltip>
//       );
//     })
//   }
//   render() {
//     return (
//       <div style={{
//         minHeight: '600px'
//       }}>
//         <div className="city_component_text">
//           <h2>
//             Find Us in your City..
//           </h2>
//         </div>
//         <div
//           style={{
//           display: 'flex',
//           flexDirection: 'row',
//           flexWrap: 'wrap',
//           justifyContent: 'space-between'
//         }}>
//           {this.renderCityLsit(this.props.allCity)}
//         </div>
//       </div>
//     );
//   }
// }

// export default City;
// // ////////////////////////////////////////////////////////////////////////


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import ButtonBase from 'material-ui/ButtonBase';
import Typography from 'material-ui/Typography';
import {Link} from 'react-router-dom';
const styles = theme => ({
  h2:{
   marginLeft: 175,
  fontSize: 48,
  fontWeight: 'bold',
  fontFamily: 'Robotto',
  opacity: '0.6',
  [
     theme
        .breakpoints
        .down('sm')
  ]:{
    marginLeft: 0,
    fontSize: 36,
  },
  [
     theme
        .breakpoints
        .down('md')
  ]:{
    marginLeft: 0,
  }
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '80%',
    [
      theme
        .breakpoints
        .down('md')
    ]: {
      width: '100%'
    },
    margin: '0 auto'
  },
  image: {
    position: 'relative',
    height: 300,
    [
      theme
        .breakpoints
        .down('sm')
    ]: {
      width: '100% !important', // Overrides inline-style
      height: 150
    },
    '&:hover': {
      zIndex: 1
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15
    },
    '&:hover $imageMarked': {
      opacity: 0
    },
    '&:hover $imageTitle': {
      opacity: 1,
      fontSize:30
    }
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white
  },
  imageSrc: {
    position: 'absolute',
    left: 5,
    right: 5,
    top: 5,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%'
  },
  imageBackdrop: {
    position: 'absolute',
    left: 5,
    right: 5,
    top: 5,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.4,
    transition: theme
      .transitions
      .create('opacity')
  },
  imageTitle: {
    fontFamily: 'Monoton, cursive',
    fontSize: '26px',
    opacity: '0.5',
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme
      .transitions
      .create('opacity')
  }
});


class City extends Component {
  renderCityLsit = (cityList) =>{
    const {classes} = this.props;
    return cityList.map((city, index)=>{
      return(
        <Link key={city.id} to={`${city.links}/restaurants`} className={classes.image} style={{
          width: '25%'
        }} >
        <ButtonBase
          // focusRipple
          key={city.title}
          className={classes.image}
          style={{
          width: '100%'
        }}>
          <div
            className={classes.imageSrc}
            style={{
            backgroundImage: `url(${city.imageURL})`
          }}/>
          <div className={classes.imageBackdrop}/>
          <div className={classes.imageButton}>
            <Typography
              component="h3"
              type="subheading"
              color="inherit"
              className={classes.imageTitle}>
              {city.title}

            </Typography>
          </div>
        </ButtonBase>
        </Link>
      )
    })
  } 

  render(){
    const {classes} = this.props;
    return(
    <div>
      <div className="city_component_text">
        <h2 className={classes.h2}>
          Find Us in your City.. 
        </h2>
      </div>
      <div className={classes.root}>
        {this.renderCityLsit(this.props.allCity)}
      </div>
    </div>

    );
  }
}

City.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(City);
