import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import addstyles from './styles/addstyles'
import Button from '@material-ui/core/button'
import Container from '@material-ui/core/Container'
class Add extends React.Component{
    render(){
        const {classes} = this.props
        return (
        <div>
            <Container  fixed>
              <form className={classes.form} noValidate autoComplete="off">
                <TextField id="standard-basic"  label="Outlined" variant="outlined"  />
                <TextField id="filled-basic"  label="Outlined" variant="outlined"/>
                <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
                <Button color='primary' onClick = {this.Sendurl}>Add</Button>
              </form>
            </Container>
        </div>)
    }

    Sendurl= ()=>{
        console.log('sended')

    }
}

export default withStyles (addstyles) (Add)   