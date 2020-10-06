import React from 'react'
import {withStyles} from '@material-ui/styles'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';





class Url extends React.Component{
    constructor(){
        super()
        this.state={
          msgdisplay:null,
         
          selectedindex:null

        }
    }
   
   
    render(){
     
      const {url}=this.props
      

      if(url){
        return(<div>
          <TableContainer >
            <Table  aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell align="right">Description</TableCell>
                  <TableCell align="right">Link</TableCell>
                  <TableCell align="right"  >Option</TableCell>
                
              </TableRow>
              </TableHead>
              <TableBody>

              {  url.map((_url,_index)=>{
                return(
                <TableRow key={_index}
                selected={this.state.selectedindex===_index}
                
                
                >
              <TableCell ><Button href ={_url.Link}>{_url.Title}</Button></TableCell>
              <TableCell align="right">{_url.Description}</TableCell>
              <TableCell align="right">{_url.Link}</TableCell>
              <TableCell align="right">
            
              
              <Button onClick={()=>this.selector(_index),this.handleClick}
              > <DeleteIcon /></Button>


              </TableCell>
                </TableRow>
                )
              })
              }
                </TableBody>
              
          </Table>
        </TableContainer>
              <Snackbar
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              open={this.state.msgdisplay}
              autoHideDuration={6000}
            
              message="Link Deleted"
              action={
                <React.Fragment>
                  <Button color="secondary" size="small" onClick={this.handleClose}>
                    UNDO
                  </Button>
                  <IconButton size="small" aria-label="close" color="inherit" onClick={this.handleClose}>
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </React.Fragment>
              }
          />
      
              
        
        
        </div>
        
    )}else{
      return(<div></div>)}
    }
           
         
      

     
    
    selector=(_index)=>{
      this.setState({selectedindex:_index})
     }
    handleClose=()=>{
      if(this.state.msgdisplay){
          
          this.setState({msgdisplay:false})
        }     
    }
    handleClick=()=>{
      
        this.setState({msgdisplay:true})
        
    }
  

   
}
export default Url


