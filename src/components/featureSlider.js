import React, {Component} from 'react';
import Carousel from 'react-bootstrap/lib/Carousel';

const slider = {
    // width: "80%", height: "100px", margin:"10px auto", position: "relative",
    // background: 'url(http://via.placeholder.com/350x150) no-repeat'
}
const imageStyle = {
    width: "100%",
    margin: "0 auto",
    height: "600px",
    backgroundSize: "cover",
    backgroundPosition: "center center"
}
// const inputTypeStyle = {     position: 'absolute',     width: '500px',
// top: '50%',     left: '50%',     transform: "translate(-50%, -50%)",
// color: "black",     border: "1px solid black" } ////////////////////// const
// styles = theme => ({     container: {         display: 'flex',
// flexWrap: 'wrap'     },     textField: {         marginLeft:
// theme.spacing.unit,         marginRight: theme.spacing.unit,         width:
// 200     },     menu: {         width: 200     },     _carousel: {
// height:"500px",     }, }); ///////////////
const settings = {
    indicators: false,
    interval: 1000,
    controls: false
}

class FeatureSlider extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // const { classes } = this.props;
        return (
            <div style={slider}>
                <Carousel {...settings} className={this.props._carousel}>

                    <Carousel.Item>
                        <img
                            style={imageStyle}
                            alt="1349x500"
                            src="http://lorempixel.com/1349/500/food/4/"/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            style={imageStyle}
                            alt="1349x500"
                            src="http://lorempixel.com/1349/500/food/3/"/>

                    </Carousel.Item>

                </Carousel>

            </div>
        );
    }
}
export default FeatureSlider;