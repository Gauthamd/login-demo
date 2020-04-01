import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper, ButtonGroup, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useTheme } from '@material-ui/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Popper from '@material-ui/core/Popper';
import Grow from '@material-ui/core/Grow';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';


const options = ['Profile', 'Logout'];
// We can inject some CSS into the DOM.
const styles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    button: {
        color: 'white',
        textTransform: 'capitalize',
        "&:hover, &:focus": { outline: 'none', background: 'transparent' }
    },
    paper: {
        width: '20vw',
    }
});




function LogoutButton(props) {
    const { classes, children, className, user, onLogoutClick, ...other } = props;
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [placement, setPlacement] = React.useState();
    // const {user} = this.props.auth;
    const theme = useTheme();
    const handleToggle = () => {
        setOpen(prevOpen => !prevOpen);
    };

    const handleClick = newPlacement => event => {
        setAnchorEl(event.currentTarget);
        setOpen(prev => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };
    const handleClose = event => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    const handleMenuItemClick = (event, index) => {
        if(index===1)
        {
            console.log(index);
            onLogoutClick(event);
        }
        setSelectedIndex(index);
        setOpen(false);
    };
    return (
        <Grid container direction="column" >
            <Grid item xs={12}>
                <ButtonGroup variant="text" aria-label="split button">
                    <Button className={classes.button}><Typography variant="h6">{user.firstName}, {user.lastName}</Typography></Button>
                    <Button
                        color="primary"
                        size="small"
                        aria-controls={open ? 'split-button-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-label="select merge strategy"
                        aria-haspopup="menu"
                        onClick={handleClick('bottom-end')}
                        className={classes.button}
                    >
                        <ArrowDropDownIcon />
                    </Button>
                </ButtonGroup>
                <Popper open={open} anchorEl={anchorEl} placement={placement} transition disablePortal>
                    {({ TransitionProps }) => (
                        <Grow
                            {...TransitionProps}
                        >
                            <Paper className={classes.paper}>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList id="split-button-menu">
                                        {options.map((option, index) => (
                                            <MenuItem
                                                key={option}
                                                selected={index === selectedIndex}
                                                onClick={event => handleMenuItemClick(event, index)}
                                            >
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>

            </Grid>
        </Grid>


    );
}

LogoutButton.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    onLogoutClick: PropTypes.func.isRequired,
};



export default withStyles(styles)(LogoutButton);
