import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ButtonBase from 'material-ui/ButtonBase';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
      width: '100%',
      margin: '0px auto',
      marginTop: theme.spacing.unit * 3,
      marginBottom: theme.spacing.unit * 3,
      display: 'flex',
      flexWrap: 'wrap',
      minWidth: 300,
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

const images = [
  {
    url: 'https://www.bobevans.com/-/media/bobevans_com/images/our-restaurants/2017winter/big_egg_bfast_core_winterfy17.jpg?h=333&la=en&w=500&hash=0CADDF6BC5033B2EB4521129EF2201803FFA414E',
    title: 'Breakfast',
    width: '40%',
  },
  {
    url: 'https://2.bp.blogspot.com/-_-3Vr69wUm4/V3ooDNeHx6I/AAAAAAAAnmA/OY_sX8c1c309RAfvrADV2LZQR0kXX1wPgCLcB/s640/Indian-lunch-ideas-58.jpg',
    title: 'Lunch',
    width: '30%',
  },
  {
    url: 'https://bloximages.chicago2.vip.townnews.com/wcfcourier.com/content/tncms/assets/v3/editorial/a/db/adb47ae8-3c35-50e6-8e7d-1b70bfab3e5b/5a12fbc99025a.image.jpg?resize=1200%2C800',
    title: 'Dinner',
    width: '30%',
  },
  {
    url: 'http://97zokonline.com/files/2017/08/Restaurants-in-Rockford.jpg',
    title: 'Fast Foods',
    width: '50%',
  },
{
    url: 'http://www.workingwomansfood.com/wp-content/uploads/2015/12/90464_640x428.jpg',
    title: 'Refreshments',
    width: '50%'
},
];

function QuickBreakfastLunchDinner(props) {
  const { classes } = props;

  return (
      <div>
    <h2>Quick Search</h2>
    <div className={classes.root}>
      {images.map(image => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          style={{
            width: image.width,
          }}
        >
          <div
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <div className={classes.imageBackdrop} />
          <div className={classes.imageButton}>
            <Typography
              component="h3"
              type="subheading"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <div className={classes.imageMarked} />
            </Typography>
          </div>
        </ButtonBase>
      ))}
    </div>
      </div>
  );
}

QuickBreakfastLunchDinner.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(QuickBreakfastLunchDinner);