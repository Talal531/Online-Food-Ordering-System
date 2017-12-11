import React, {Component} from 'react';

const REQ_URL = "http://localhost:3001/restaurants";

class RestaurantsMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menu: []
        }
    }
    componentDidMount(){
        fetch(`${REQ_URL}/${this.props.match.params.resCity}`,{method:'GET'})
        .then(response => response.json())
        .then(json => {
                console.log(json);
            })
    }
 
    render() {
        console.log(this.props.match.url)
        return (
            <div>
                RestaurantsMenu
            </div>
        );
    }
}
export default RestaurantsMenu;