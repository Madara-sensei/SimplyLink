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

class Account extends React.Component{
    render() {
        const{classes}=this.props
        return(<Container className={classes.main} fixed>

            <div className={classes.root}>
                <Avatar alt="Remy Sharp"  className={classes.large} />
            </div>
          
             <List component="nav" className={classes.divider} aria-label="mailbox folders">
             <Button className={classes.name}>Francis Martin</Button> 
                <ListItem button>
                    <ListItemText primary="Privacy" />
                    <SettingsIcon primary="grey"/>
                </ListItem>
                <Divider />
                <ListItem button divider>
                    <ListItemText primary="Security"/>
                    <SettingsIcon/>
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Content" />
                    <SettingsIcon/>
                </ListItem>
                <Divider light />
                <ListItem button>
                    <ListItemText primary="Policy" />
                    <SettingsIcon/>
                </ListItem>
           </List>

           </Container>
       
      )
    }
}
export default withStyles (avatar) (Account)