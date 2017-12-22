// import React, {Component} from 'react';
// import Carousel from 'react-bootstrap/lib/Carousel';

// const styles={
//     slider:{
//         height: '80vh',
//     },
// imageStyle : {
//     width: "100%",
//     margin: "0 auto",
//     height: "80vh",
//     backgroundSize: "cover",
//     backgroundPosition: "center center"
// },

// }

// const settings = {
//     indicators: false,
//     interval: 1000,
//     controls: false
// }

// class FeatureSlider extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {

//         return (
//             <div>
//                 <Carousel {...settings} style={styles.slider}>

//                     <Carousel.Item>
//                         <img
//                             style={styles.imageStyle}
//                             alt="1349x500"
//                             src="http://lorempixel.com/1349/500/food/4/"/>
//                     </Carousel.Item>

//                     <Carousel.Item>
//                         <img
//                             style={styles.imageStyle}
//                             alt="1349x500"
//                             src="http://lorempixel.com/1349/500/food/3/"/>

//                     </Carousel.Item>

//                 </Carousel>

//             </div>
//         );
//     }
// }
// export default FeatureSlider;

// ===============================

import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import SearchIcon from 'material-ui-icons/Search';
import IconButton from 'material-ui/IconButton';

const styles = theme => ({
    divContainer:{
        backgroundImage: `url("https://lorempixel.com/1349/500/food/1/")`,
        height: '60vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        position: 'relative'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    mainCover:{
        padding:'15px',
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translate(-50%, 50%)',
        width: '50%',
        [
            theme
                .breakpoints
                .down('md')
        ]:{
            width: '95%'
        },
        fontSize: '18',
        outline: 'none',
    },
    textField: { 
        padding:'15px',
        width: '80%',
        [
            theme
                .breakpoints
                .down('sm')
        ]:{
            width: '100%'
        },
        fontSize: '14px',
        outline: 'none',
        border: '1px solid #ccc',
        borderRadius: '4px',
        },

    button:{
        // marginLeft: theme.spacing.unit,
        // marginRight: theme.spacing.unit,
        padding:'10px 20px',
        // position: 'absolute',
        // top: '50%',
        // left: '70%',
        // transform: 'translate(-50%, 50%)',
        backgroundColor: '#24a452cc',
        color: '#fff',
        width: '15%',
        [
            theme
                .breakpoints
                .down('sm')
        ]:{
            width: '100%'
        },
        fontSize: '14px',
        outline: 'none',
        border: '1px solid #ccc',
        borderRadius: '4px',
    }
   
});

class FeatureSlider extends Component {
    render(){
            const {classes} = this.props;
        return(
            <div className={classes.divContainer}>
            <div className={classes.mainCover}>
            <form className= {classes.container}>
                <h2 style={{textAlign: 'center', color: '#fff', fontFamily: 'Monoton', fontSize: '32px'}}>GET YOUR BEST FOOD FROM YOUR FAVIOURITE RESTAURANTS</h2>
                <input 
                    id="name"
                    type="text" 
                    placeholder="Enter your delivery location.."
                    className={classes.textField}/>
                {/* <button className={classes.button}>Search</button> */}
                <IconButton className={classes.button}><SearchIcon /> Search</IconButton>
            </form>
            </div>
        </div>
        )
    }
}


FeatureSlider.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FeatureSlider);
