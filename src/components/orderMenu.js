import React, {Component} from 'react';
import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';



const styles = theme => ({
    container: {
        width:'85%',
        margin: '20px auto',
        [
        theme
            .breakpoints
            .down('md')
        ]:{
            width:'95%'
        }
    },

    root: {
        flexGrow: 1,
        marginTop: 30
    },
 
});

class OrderMenu extends Component {

    renderCuisineList = (restaurantsList) => {
        const filterList = restaurantsList.filter(rest =>rest.restaurant_name===this.props.match.params.resName) ;
        filterList.map((item,index)=>{
            return item.cuisines.map((cuisine,i)=>{
                <div>
                    <Paper>{cuisine.cuisineName} </Paper>
                </div>
            })
        })
    }

   

    render() {
        const  { classes } = this.props;
        const filterList = this.props.restaurantss.filter(rest =>rest.restaurant_name===this.props.match.params.resName);
        // console.log(this.props)
        return (
            <div className={classes.container}>
                <Grid container spacing={8} className={classes.root}>
                
                    <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
                        {this.renderCuisineList(this.props.restaurantss)}
                        
                    </Grid>

                    <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                        <Paper className={classes.paper}>4</Paper>
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
