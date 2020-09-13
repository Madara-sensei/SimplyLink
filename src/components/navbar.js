import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styles from'./styles/styles'
import Auth from './google_auth'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class Navbar extends React.Component{
    constructor(){
        super();
       
        

    }
    render(){
        const{classes}=this.props
       
        
        return(
        <div className={classes.root}>
                    <AppBar position="static">
                        <Toolbar >
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
                        onClick={this.handleClick}>
                        <Menu
                            id="simple-menu"
                            //anchorEl={anchorEl}
                            keepMounted
                            //open={Boolean(anchorEl)}
                            //onClose={handleClose}
                            >
                            <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                            <MenuItem onClick={this.handleClose}>My account</MenuItem>
                            <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                        </Menu>
                        
                        <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Links
                        </Typography>
                        <Auth/>
                        
                        </Toolbar>
                    </AppBar>
        </div>
        )
    }
    display =()=>{

    }
    handleClose=()=>{

    }
    handleClick=()=>{}
   
}
/*  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleClose}>My account</MenuItem>
        <MenuItem onClick={this.handleClose}>Logout</MenuItem>
        */
export default withStyles(styles)(Navbar)