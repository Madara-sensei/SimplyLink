import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import avatar from './styles/avatar'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import SettingsIcon from '@material-ui/icons/Settings';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Button from'@material-ui/core/Button'
import EditIcon from '@material-ui/icons/Edit';
import { Typography } from '@material-ui/core';

class Account extends React.Component{
    render() {
        const{classes}=this.props
        return(<Container className={classes.root} >

            <div className={classes.avt}>
                <Avatar alt="Remy Sharp"  className={classes.large} />
            </div>
            <Typography className={classes.name}  color='secondary'  variant="h5" gutterBottom>Francis Martin</Typography>
          
             <List component="nav" className={classes.divider} aria-label="mailbox folders">
             
             <Divider />
                <ListItem button>
                    <ListItemText primary="Privacy"  />
                    <SettingsIcon color="primary"/>
                </ListItem>
                <Divider />
                <ListItem button divider>
                    <ListItemText primary="Security"/>  
                    <SettingsIcon  color="primary"/>
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Content" />
                    <SettingsIcon  color="primary"/>
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText primary="Policy" />
                    <SettingsIcon  color="primary"/>
                </ListItem>
           </List>

           </Container>
       
      )
    }
}
export default withStyles (avatar) (Account)