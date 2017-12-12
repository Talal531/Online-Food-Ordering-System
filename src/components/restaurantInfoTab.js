// import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import {withStyles} from 'material-ui/styles';
// import AppBar from 'material-ui/AppBar';
// import Tabs, {Tab} from 'material-ui/Tabs';
// import PhoneIcon from 'material-ui-icons/Phone';
// import FavoriteIcon from 'material-ui-icons/Favorite';
// import PersonPinIcon from 'material-ui-icons/PersonPin';
// import HelpIcon from 'material-ui-icons/Help';
// import ShoppingBasket from 'material-ui-icons/ShoppingBasket';
// import ThumbDown from 'material-ui-icons/ThumbDown';
// import ThumbUp from 'material-ui-icons/ThumbUp';
// import Typography from 'material-ui/Typography';

// import {Link} from 'react-router-dom';

// //TAB container component
// function TabContainer(props) {
//     return (
//         <Typography component="div" style={{
//             padding: 8 * 3
//         }}>
//             {props.children}
//         </Typography>
//     );
// }

// TabContainer.propTypes = {
//     children: PropTypes.node.isRequired
// };

// const styles = theme => ({
//     root: {
//         flexGrow: 1,
//         width: '100%',
//         marginTop: theme.spacing.unit * 3,
//         backgroundColor: theme.palette.background.paper
//     }
// });

// //TAB component
// class RestaurantInfoTab extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             value: 0
//         };
//     }

//     handleChange = (event, value) => {
//         this.setState({value});
//     };

//     render() {
//         const {classes} = this.props;
//         const {value} = this.state;
//         return (
//             <div className={classes.root}>
//                 <AppBar position="static" color="default">
//                     <Tabs
//                         value={value}
//                         onChange={this.handleChange}
//                         scrollable
//                         scrollButtons="on"
//                         indicatorColor="primary"
//                         textColor="primary">
    
//                         <Tab label="Info"/>
//                         <Tab label="Reviews"/>
//                     </Tabs>
//                 </AppBar>
//                     {value === 0 && <TabContainer>
//                         <h1>INFO</h1>
//                     </TabContainer>}
              
//                     {value === 1 && <TabContainer>
//                         <h1>Reviews</h1>
//                     </TabContainer>}

//             </div>
//         );
//     }
// }

// RestaurantInfoTab.propTypes = {
//     classes: PropTypes.object.isRequired
// };

// export default withStyles(styles)(RestaurantInfoTab);

////////////////////////////////////////////////////////////////////






import React, {Component} from 'react';

import AppBar from 'material-ui/AppBar';
import Tabs, {Tab} from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';

import {Link} from 'react-router-dom';

const DB_URL = "http://localhost:3001/home";

//TAB container component
function TabContainer(props) {
    return (
        <Typography component="div" style={{
            padding: 8 * 3
        }}>
            {props.children}
        </Typography>
    );
}

const styles = {
    root: {
        fontStyle:'Robotto',
        flexGrow: 1,
        width: '100%',
        marginTop: 24,
        backgroundColor: '#fff'
    }
};

//TAB component
class RestaurantInfoTab extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: 0,
            restaurants:'',
        };
    }

    handleChange = (event, value) => {
        this.setState({value});
    };

     componentDidMount() {
        fetch(DB_URL, {method: 'GET'})
            .then(response => response.json())
            .then(json => {
                const restaurants = json.restaurants[0]
                console.log(restaurants)
                this.setState({restaurants})

            })

    };

    render() {
        return (
            <div style={styles.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        scrollable
                        scrollButtons="on"
                        indicatorColor="primary"
                        textColor="primary">
                        <Tab label="Info"/>
                        <Tab label="Reviews"/>
                    </Tabs>
                </AppBar>
                    {this.state.value === 0 && <TabContainer>
                        <h1>INFO</h1>
                    </TabContainer>}
              
                    {this.state.value === 1 && <TabContainer>
                        <h1>Reviews</h1>
                    </TabContainer>}

            </div>
        );
    }
}



export default RestaurantInfoTab;

//////////////////////////////////////////////////////////////////

