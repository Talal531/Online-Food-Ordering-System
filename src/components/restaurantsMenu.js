import React, {Component} from 'react';

const REQ_URL = "http://localhost:3001/home";

class RestaurantsMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            restaurantss: '',
            menu: []
        }
    }
    componentDidMount(){
        fetch(REQ_URL,{method:'GET'})
        .then(response => response.json())
        .then(json => {
            // console.log(json.restaurants)
            this.setState({
                restaurantss: json.restaurants,
            })
            })
    }

    renderMenuList=(menuList)=>{
            return menuList.map((item,index)=> {
                return(
                    <div>
                        <p>{item.restaurant_name}</p>
                    </div>
                )
            })
    }
 
    render() {
        // console.log(this.props.match)
        // console.log(this.state.restaurants)
    return (
        <div>
            {this.renderMenuList(this.state.restaurantss)}
        </div>
    )
    }
}
export default RestaurantsMenu;