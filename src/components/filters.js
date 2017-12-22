import React, {Component} from 'react';

import {Route, Link} from 'react-router-dom';


const Filters_URL = "http://localhost:3001/RestaurantsFilters";

const Styles = {
    h6: {
        fontWeight: 'bold',
        borderBottom: '1px solid #ccc',
        padding: '5px'
    }
}

class FiltersBy extends Component {
    render() {
        const { restaurants } =this.props;
        // console.log(this.props.cityName)
        console.log(restaurants);

        return (
            <div>
                <h6 style={Styles.h6}>{this.props.name}</h6>
                {this
                    .props
                    .restaurants
                    .map((item, index) => {
                        return (
                            <div key={index}>
                                <Link
                                    to={{
                                    pathname: `${this.props.cityName.match.url}`,
                                    // pathname: `/${this.props.cityName}/restaurants`,
                                    search: `${item.replace(/\s+/g, '-').toLowerCase()}`
                                }}>
                                    {item}
                                </Link>
                            </div>
                        )
                    })}

            </div>
        )
    }
}

class Filters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameRes: "",
            filtersByRestaurant: [],
            nameCui: "",
            filterByCuisine: [],
            nameCat: "",
            filterByCategory: []
        }
    }

    componentDidMount() {
        fetch(Filters_URL, {method: 'GET'})
            .then(response => response.json())
            .then(json => {
                // console.log(json.filterByRestaurant)
                this.setState({
                    nameRes: json.restaurants.name,
                    filtersByRestaurant: json.restaurants.filterByRestaurant,
                    nameCui: json.cuisines.name,
                    filterByCuisine: json.cuisines.filterByCuisine,
                    nameCat: json.category.name,
                    filterByCategory: json.category.filterByCategory,
                })
            })
    }
    render() {
        return (
            <div>
                <h5>Filters</h5><hr/>
                <FiltersBy
                    cityName={this.props.cityName}
                    restaurants={this.state.filtersByRestaurant}
                    name={this.state.nameRes}/>

                <FiltersBy
                    cityName={this.props.cityName}
                    restaurants={this.state.filterByCategory}
                    name={this.state.nameCat}/>

                <FiltersBy
                    cityName={this.props.cityName}
                    restaurants={this.state.filterByCuisine}
                    name={this.state.nameCui}/>

            {/* <Route path={this.props.cityName.location.search} render={()=>{
                console.log(this .state.filtersByRestaurant)
            }}/> */}
            </div>
        );
    }
}
export default Filters;