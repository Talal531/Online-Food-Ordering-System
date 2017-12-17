import React, {Component} from 'react';
import Carousel from 'react-bootstrap/lib/Carousel';

const styles={
    slider:{
        height: '80vh',
    },
imageStyle : {
    width: "100%",
    margin: "0 auto",
    height: "80vh",
    backgroundSize: "cover",
    backgroundPosition: "center center"
},

}

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

        return (
            <div>
                <Carousel {...settings} style={styles.slider}>

                    <Carousel.Item>
                        <img
                            style={styles.imageStyle}
                            alt="1349x500"
                            src="http://lorempixel.com/1349/500/food/4/"/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            style={styles.imageStyle}
                            alt="1349x500"
                            src="http://lorempixel.com/1349/500/food/3/"/>

                    </Carousel.Item>

                </Carousel>

            </div>
        );
    }
}
export default FeatureSlider;