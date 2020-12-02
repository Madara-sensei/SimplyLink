import React from 'react'
import TableFooter from '@material-ui/core/TableFooter';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import fstyles from './styles/fstyles'
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import GitHubIcon from '@material-ui/icons/GitHub';


import Link from '@material-ui/core/Link';

function Copyright() {
    return (
      <Typography variant="body2">
        {'Copyright © '}
        <Link color="primary" href="https://simplylink.web.app/">
             SimplyLink
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
class Footer extends React.Component{
    
  
    render(){
        const {classes} = this.props
        return(
            <div className={classes.root}>
                
            <footer className={classes.footer} backgroundcolor="secondary">
              <Container maxWidth="sm" className={classes.txt}>
                <Typography variant="h5" color="primary" >Simplylink, Made simple.</Typography>
                <Typography variant="h6" >Simplylink, is an url shortener, easy and fast to use. </Typography>
                
                
            
               

               <Typography> Created by <GitHubIcon/> <Button href="https://github.com/Madara-sensei" color="primary">Madara.</Button>
                   <Copyright />
               </Typography>
              </Container>
            </footer>
          </div>
       
        )
    }
}


export default withStyles (fstyles) (Footer);