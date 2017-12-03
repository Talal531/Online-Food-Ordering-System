import React, {Component} from 'react';

import {Row, Col, Grid, Thumbnail, Button} from 'react-bootstrap';

const DB_URL = "http://localhost:3001/home";
class Restaurants extends Component {
        constructor(props){
            super(props);

            this.state={
                restaurants: [],
            }
        }
        componentDidMount(){
            fetch(DB_URL, {method:'GET'})
            .then(response => response.json())
            .then(json => {
                this.setState({
                    restaurants: json.restaurants,
                })
            
            })

        }
    
    renderList = (restaurantList) => {
        return restaurantList.map((item, i) => {
            return(
               <div>
                    <Col sm={12} md={12}>
                         <Thumbnail src={item.restaurant_image} alt="242x200">
                                <h5>{item.restaurant_name}</h5>
                                <p>Description</p>
                                <p>
                                    <Button bsStyle="primary">Button</Button>
                                    
                                </p>
                         </Thumbnail>
                    </Col>
               </div>
                
            );
        })
    }
    render(){
        console.log(this.props.rest)
        return(
            // <div className="restaurant_container card mb-3">
            //     <div className="restaurant_image" >
        //         <img className="card-img-top" src="http://media.themobilefoodguide.com/images/restaurants/7642/800/31112MFG76421069452846.jpg" alt=""/>
        //     </div>
        //     <div className="restaurant_details card-body">
        //         <h3 className="restaurant_name">Restaurant 1</h3>
        //         <div className="restaurant_address">
        //             <span className="short_address"><h5>Saddar, Karachi</h5></span>
        //             <p><strong>Address: </strong>Road 36, Inside Durgam Cheruvu, Burns Road, Karachi</p>
        //         </div>
        //     </div>
        // </div>
        <div style={{width:'95%', margin: '10px auto'}}>
        <Row className="show-grid">
        <Col style={{border: '1px solid black'}} xsHidden smHidden md={3}><code>&lt;{'Col xsHidden md={3}'} /&gt;</code></Col>
        <Col  xs={12} md={6}>

            {this.renderList(this.state.restaurants)}
         </Col>
        <Col style={{border: '1px solid black'}} xsHidden smHidden md={3}><code>&lt;{'Col xsHidden md={3}'} /&gt;</code></Col>
        </Row>
            </div>
            
        );
    }
}
    export default Restaurants;
    