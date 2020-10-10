import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import addstyles from './styles/addstyles'
import Button from '@material-ui/core/button'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography';

class Add extends React.Component{
  constructor(){
    super();
    this.state = {
      title:'',
      description:'',
      link:''
    }
  }
    render(){
        const {classes,logged} = this.props
        if(logged){
          return (
            <div>
              <Container className={classes.root}  >
                      <Typography className={classes.text}  color='secondary'  variant="h4" gutterBottom>Add a new favorite link.
                      </Typography>  
                        <form className={classes.form} noValidate autoComplete="off">
                          <TextField id="title"  label="Title" variant="outlined" onKeyUp={(e)=>this.fill_title(e.target.value)} required />
                          <TextField id="description"  label="Description" variant="outlined"  onKeyUp={(e)=>this.fill_description(e.target.value)} />
                          <TextField id="link" label="Link" variant="outlined" onKeyUp={(e)=>this.fill_link(e.target.value)} required/>
                          </form>  
                          {
                            this.state.link && this.state.title ? <Button className={classes.btn} color='secondary' size='large' onClick = {this.Sendurl.bind()}>Add</Button>:null
                          } 
                          
                       
                </Container>
              
            </div>
            )

        }else{
          return(<div>
              <Typography className={classes.ntlog} color='secondary' variant='h3'>You need to be logged to add Links .</Typography>
          </div>)
        }
        
    }
    fill_title=(value)=>{
      this.setState({title:value})

    }
    fill_description=(value)=>{
      this.setState({description:value})

    }
    fill_link=(value)=>{
      this.setState({link:value})

    }

    Sendurl= ()=>{
      this.props.Sendurl(this.state.title,this.state.description,this.state.link)
     }
}

export default withStyles (addstyles) (Add)   