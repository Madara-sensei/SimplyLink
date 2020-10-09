import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styles from'./styles/styles'
import Auth from './google_auth'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'

class Navbar extends React.Component{
    constructor(){
        super();
        this.state={
            menudisplay:null
        }
    }
    render(){
        const{classes}=this.props
       
        return(
        <div className={classes.root}>
                    <AppBar position="static">
                        <Toolbar >
                        <IconButton edge="start" className={classes.menuButton} color="secondary" aria-label="menu"
                        onClick={this.handleClick}>
                            <Menu className={classes.Menu}
                              
                                id="simple-menu"
                              
                                open={this.state.menudisplay}
                            >   
                                <MenuItem color="primary" onClick={this.handleClose} component={Link} to={'/Add'}>Add URL</MenuItem>
                                <MenuItem color="primary" onClick={this.handleClose} component={Link} to={'/Account'}>My account</MenuItem>
                                <MenuItem onClick={this.handleClose}component={Link} to={'/Link'}>Links</MenuItem>
                                <MenuItem onClick={this.handleClose}component={Link} to={'/'}>Logout</MenuItem>
                            </Menu>
                        
                            <MenuIcon />
                        </IconButton>
                        <Typography color="secondary" variant="h6" className={classes.title}>
                            SimplyLinks
                        </Typography>
                        <SearchIcon />
                        <InputBase
                                placeholder="Search…"
                                 inputProps={{ 'aria-label': 'search' }}
                                 classes={{root: classes.inputRoot,
                                 input: classes.inputInput,
                                 }}/>

                        <Auth/>
                        
                        </Toolbar>
                    </AppBar>
        </div>
        )
    }
 
    handleClose=()=>{
        if(this.state.menudisplay){
            
            this.setState({menudisplay:false})
        }     
    }
    handleClick=()=>{
      
        this.setState({menudisplay:true})
        this.handleClose()
        
    }
   
}

export default withStyles(styles)(Navbar)