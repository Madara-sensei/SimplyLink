import React from 'react'
import {withStyles} from '@material-ui/styles'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';




class Url extends React.Component{
    constructor(){
        super()
    }
   
    render(){
      const {url}=this.props

      if(url){
        return(
      <TableContainer >
        <Table  aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Link</TableCell>
              <TableCell align="right">Option</TableCell>
          </TableRow>
          </TableHead>
          <TableBody>

          {  url.map((_url,_index)=>{
            return(
             <TableRow key={_index}>
            
          <TableCell >{_url.Title}</TableCell>
          <TableCell align="right">{_url.Description}</TableCell>
          <TableCell align="right">{_url.Link}</TableCell>
          <TableCell align="right">Edit Delete</TableCell>
            </TableRow>
            )
          })
          }
            </TableBody>
          
      </Table>
    </TableContainer>
          
    )}else{return(<div></div>)}
           
         
      

     
    }
      
}
export default Url


