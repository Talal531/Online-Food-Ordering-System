import React, {Component} from 'react';
import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import Tabs, {Tab} from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import List, {ListItem, ListItemAvatar, ListItemIcon, ListItemSecondaryAction, ListItemText} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import FolderIcon from 'material-ui-icons/Folder';
import AddIcon from 'material-ui-icons/Add';

const styles = theme => ({
    container: {
        width:'85%',
        margin: '20px auto',
        fontSize:30,
        [
        theme
            .breakpoints
            .down('md')
        ]:{
            width:'95%',
        }
    },

    root: {
        flexGrow: 1,
        marginTop: 30
    },

    demo: {
        background: theme.palette.background.paper,
    },

    paper: {
        padding: 10,
        height: 500,
        borderRadius: 5,
        boxShadow: '0px 0px 10px #ccc',
    },
 
});


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


class OrderMenu extends Component {

    state={
        value: 0,
    }

    renderCuisineList = (restaurantsList) => {
        const filterList = restaurantsList.filter(rest =>rest.restaurant_name===this.props.match.params.resName) ;
        return filterList.map((item,index)=>{
            return item.cuisines.map((cuisine,ind)=>{
                // console.log(cuisine)
                <div>
                    <h2>{cuisine.cuisineName}</h2>
                </div>
                
            })
        })
    }

    handleChange = (event, value) => {
        this.setState({value});
    };
    
    addcart = () => {
        console.log("clicked")
    }

    render() {
        const  { classes } = this.props;
        const filterList = this.props.restaurantss.filter(rest =>rest.restaurant_name===this.props.match.params.resName);
        console.log(filterList)
        return (
            <div className={classes.container}>
                <Grid container spacing={8} className={classes.root}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Paper style={{padding: 10}}>
                            <p style={{textTransform: 'capitalize' }}>
                                {this.props.match.params.resName.replace(/-/g, ' ')}
                            </p>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
                        {this.renderCuisineList(this.props.restaurantss)}
                        <AppBar position="static" color="default">
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        scrollable
                        scrollButtons="on"
                        indicatorColor="primary"
                        textColor="primary">
                        {filterList.map((item,i)=>{
                            return item.cuisines.map((menu,index)=>{
                                return <Tab key={index} label={menu.cuisineName}/>
                            })
                        })}                
                    </Tabs>
                </AppBar>
                    {this.state.value === 0 &&
                     <TabContainer>
                        {filterList.map((item,i)=>{
                            {/* const filter = item.cuisines.filter(cu => i === this.state.value); */}
                            const filter = item.cuisines[0]
                            console.log(filter)
                             return filter.cuisineMenu.map((menu,ind)=>{
                                 return (
                                     <div className={classes.demo}>
                                        <ListItem button>
                                        
                                            <ListItemText
                                                primary={menu.name}
                                                secondary={`Rs. ${menu.price}`}
                                            />

                                            <ListItemSecondaryAction>
                                                
                                                <IconButton aria-label="Add">
                                                    <AddIcon></AddIcon>
                                                </IconButton>

                                            </ListItemSecondaryAction>

                                        </ListItem>
                                     </div>
                                 )
                             })
                        })}
                    </TabContainer>}
               
                    {this.state.value === 1 &&
                     <TabContainer>
                        {filterList.map((item,i)=>{
                            {/* const filter = item.cuisines.filter(cu => i === this.state.value); */}
                            const filter = item.cuisines[1]
                            console.log(filter)
                             return filter.cuisineMenu.map((menu,ind)=>{
                                 return (
                                     <div className={classes.demo}>
                                        <ListItem button>

                                            {/* <ListItemAvatar>
                                                <Avatar>
                                                    <FolderIcon />
                                                </Avatar>
                                            </ListItemAvatar> */}

                                            <ListItemText
                                                primary={menu.name}
                                                secondary={`Rs. ${menu.price}`}
                                            />

                                            <ListItemSecondaryAction>

                                                <IconButton aria-label="Add">
                                                    <AddIcon />
                                                </IconButton>

                                            </ListItemSecondaryAction>

                                        </ListItem>
                                     </div>
                                 )
                             })
                        })}
                    </TabContainer>}
               
                    {this.state.value === 2 &&
                     <TabContainer>
                        {filterList.map((item,i)=>{
                            {/* const filter = item.cuisines.filter(cu => i === this.state.value); */}
                            const filter = item.cuisines[2]
                            console.log(filter)
                             return filter.cuisineMenu.map((menu,ind)=>{
                                 return (
                                     <div className={classes.demo}>
                                        <ListItem button>

                                            {/* <ListItemAvatar>
                                                <Avatar>
                                                    <FolderIcon />
                                                </Avatar>
                                            </ListItemAvatar> */}

                                            <ListItemText
                                                primary={menu.name}
                                                secondary={`Rs. ${menu.price}`}
                                            />

                                            <ListItemSecondaryAction>

                                                <IconButton aria-label="Add">
                                                    <AddIcon />
                                                </IconButton>

                                            </ListItemSecondaryAction>

                                        </ListItem>
                                     </div>
                                 )
                             })
                        })}
                    </TabContainer>}
               
                    {this.state.value === 3 &&
                     <TabContainer>
                        {filterList.map((item,i)=>{
                            {/* const filter = item.cuisines.filter(cu => i === this.state.value); */}
                            const filter = item.cuisines[3]
                            console.log(filter)
                             return filter.cuisineMenu.map((menu,ind)=>{
                                 return (
                                     <div className={classes.demo}>
                                        <ListItem button>

                                            {/* <ListItemAvatar>
                                                <Avatar>
                                                    <FolderIcon />
                                                </Avatar>
                                            </ListItemAvatar> */}

                                            <ListItemText
                                                primary={menu.name}
                                                secondary={`Rs. ${menu.price}`}
                                            />

                                            <ListItemSecondaryAction>

                                                <IconButton aria-label="Add">
                                                    <AddIcon />
                                                </IconButton>

                                            </ListItemSecondaryAction>

                                        </ListItem>
                                     </div>
                                 )
                             })
                        })}
                    </TabContainer>}
               
                    {this.state.value === 4 &&
                     <TabContainer>
                        {filterList.map((item,i)=>{
                            {/* const filter = item.cuisines.filter(cu => i === this.state.value); */}
                            const filter = item.cuisines[4]
                            console.log(filter)
                             return filter.cuisineMenu.map((menu,ind)=>{
                                 return (
                                     <div className={classes.demo}>
                                        <ListItem button>

                                            {/* <ListItemAvatar>
                                                <Avatar>
                                                    <FolderIcon />
                                                </Avatar>
                                            </ListItemAvatar> */}

                                            <ListItemText
                                                primary={menu.name}
                                                secondary={`Rs. ${menu.price}`}
                                            />

                                            <ListItemSecondaryAction>

                                                <IconButton aria-label="Add">
                                                    <AddIcon />
                                                </IconButton>

                                            </ListItemSecondaryAction>

                                        </ListItem>
                                     </div>
                                 )
                             })
                        })}
                    </TabContainer>}

                    {this.state.value === 5 &&
                     <TabContainer>
                        {filterList.map((item,i)=>{
                            {/* const filter = item.cuisines.filter(cu => i === this.state.value); */}
                            const filter = item.cuisines[5]
                            console.log(filter)
                             return filter.cuisineMenu.map((menu,ind)=>{
                                 return (
                                     <div className={classes.demo}>
                                        <ListItem button>

                                            {/* <ListItemAvatar>
                                                <Avatar>
                                                    <FolderIcon />
                                                </Avatar>
                                            </ListItemAvatar> */}

                                            <ListItemText
                                                primary={menu.name}
                                                secondary={`Rs. ${menu.price}`}
                                            />

                                            <ListItemSecondaryAction>

                                                <IconButton aria-label="Add">
                                                    <AddIcon />
                                                </IconButton>

                                            </ListItemSecondaryAction>

                                        </ListItem>
                                     </div>
                                 )
                             })
                        })}
                    </TabContainer>}
               
                    </Grid>

                    <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                        <Paper className={classes.paper}>
                        <div style={{backgroundImage: `url('')`}}>
                            <h4>Your Cart</h4> <hr/>
                        </div>

                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}


OrderMenu.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OrderMenu);
