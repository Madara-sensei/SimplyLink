import React from 'react';
import Url from './components/urls_display'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Account from './components/account'
import Add from './components/add'
import { BrowserRouter as Router, Switch,Redirect, Route, Link } from 'react-router-dom';
import theme from './components/theme'
import {ThemeProvider} from '@material-ui/core/styles'

const firebase = require('firebase')


class App extends React.Component{
  constructor(){;
    super ()
    this.state = {
      url:null,
      redirect: null,
      itemadded: null
    }
  }
  render(){
    return(
    <div>
      <ThemeProvider theme={theme}>
        
      <Router>
          <Navbar/>
          {
             this.state.redirect ? <Redirect to="/Link"></Redirect>:null
           
          }
          <Switch>
              <Route  path='/Link' render={() =><Url url={this.state.url} 
              DeleteUrl={this.DeleteUrl} 
              redirect= {this.state.redirect}
              update_redirect= {this.update_redirect}
              itemadded={this.state.itemadded}/> }/>
              <Route path='/Account' render={()=> <Account/>}/>
              <Route path='/Add' render={()=> <Add Sendurl={this.Sendurl}/>}/>
              
          </Switch>
          
          <Footer/>
         
          </Router>
      
          </ThemeProvider>
          
         
    </div>)
    
  }


  componentDidMount=()=>{
    firebase
    .firestore()
    .collection('url')
    .onSnapshot(serverUpdate=>{ 
      const url = serverUpdate.docs.map(_doc=>{
        const data = _doc.data();
        data['id']= _doc.id;
        return data
      });// create array of result of a fonction
      console.log(url)
      this.setState({ url: url });
    });// call after collections is updated

  }
  Sendurl=async(title,description,link)=>{
    await firebase
    .firestore()
    .collection('url')
    .add({
      Title:title,
      Description:description,
      Link:link,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    }).then(
      this.setState({itemadded:true,redirect:true})
    )




  }
  DeleteUrl= (index)=>{
  
    firebase
    .firestore()
    .collection('url')
    .doc(index)
    .delete()
    
 
  }

  update_redirect=()=>{
    this.setState({
      redirect:null
    })
  }

}


export default App;
