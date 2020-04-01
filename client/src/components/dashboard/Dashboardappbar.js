import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, BrowserRouter, Switch } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import Menu from '@material-ui/core/Menu';
import LogoutButton from './LogoutButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import PrivateRoute from "../private-route/PrivateRoute";
import Admission from './Admission';
import { CountryList,BloodGroupList } from "../../actions/valueActions";
import { ClassesList } from "../../actions/valueActions";
import { compose } from "redux";

const drawerWidth = 240;




const Styles = (theme) => ({
  root: {
    display: 'flex',
  },
  drawerIcon: {
    color: 'white',
  },
  drawerIconText: {
    color: 'white',
  },
  logoutbutton: {
    float: 'right',
  },
  headerLogo: {
    textAlign: 'center',
  },
  appBar: {
    background: '#204051',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  icon: { marginLeft: '20px' },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
    outline: 'none',
    "&:hover, &.Mui-focusVisible, &:focus": { outline: 'none', background: 'transparent' }
  },
  hide: {
    display: 'none',
  },
  drawer: {
    background: '#204051',
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    background: '#204051',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    background: '#204051',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(8) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    //padding: theme.spacing(2),
  },
});

function MiniDrawer(props) {
  //const classes = useStyles();

  const { classes, children, className, user, onLogoutClick, ...other } = props;
  const [component, setComponent] = React.useState('dashboard');
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(false);

  const handleNewItemClick = (e) => {
      props.CountryList();
      props.ClassesList();
      props.BloodGroupList();
      
  }


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar)}
      >
        <Toolbar>
          <Grid
            //justify="space-between" // Add it here :)
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={1} >
              <Typography variant="h6" className={classes.headerLogo} noWrap>
                Student Details
                </Typography>
            </Grid>

            <Grid item xs>
              <IconButton
                color="inherit"
                onClick={open ? handleDrawerClose : handleDrawerOpen}
                edge="false"
                className={clsx(classes.menuButton)}
                disableRipple

              >

                <MenuIcon className={classes.icon} />
              </IconButton>
            </Grid>
            <Grid item xs>
              <div className={classes.logoutbutton}>
                <LogoutButton user={user} onLogoutClick={onLogoutClick} />
              </div>
            </Grid>
          </Grid>
        </Toolbar>

      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
        </div>
        <Divider />
          <List>
            <ListItem button key="New Admission" onClick={handleNewItemClick} component={Link} to="/Admission">
              <ListItemIcon><AssignmentTurnedInIcon className={classes.drawerIcon} /></ListItemIcon>
              <ListItemText className={classes.drawerIconText} primary="New Admission" />
            </ListItem>
          </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon className={classes.drawerIcon} /> : <MailIcon className={classes.drawerIcon} />}</ListItemIcon>
              <ListItemText className={classes.drawerIcon} primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        {children }
      </main>

    </div >
  );
}

MiniDrawer.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  countryList: PropTypes.object.isRequired,
  ClassesList: PropTypes.object.isRequired,
  classList: PropTypes.object.isRequired,
  bloodGroupList: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  countryList: state.countryList, 
  classList: state.classList,
  bloodGroupList: state.bloodGroupList,
});



export default compose(withStyles(Styles),connect(mapStateToProps,{ CountryList }),connect(mapStateToProps,{ ClassesList }),connect(mapStateToProps, { BloodGroupList }))(MiniDrawer);