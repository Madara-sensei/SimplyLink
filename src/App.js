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
      itemadded: null,
      logged:null,
      imgurl:null,
      name:null,
      email:null
    }
  }
  render(){
    return(
    <div>
      <ThemeProvider theme={theme}>
        
      <Router>
          <Navbar getUsers={this.getUsers} logged={this.state.logged} logout={this.logout}/>
          {
             this.state.redirect ? <Redirect to="/Link"></Redirect>:null
           
          }
          <Switch>
              <Route  path='/Link' render={() =><Url url={this.state.url} 
              DeleteUrl={this.DeleteUrl} 
              redirect= {this.state.redirect}
              update_redirect= {this.update_redirect}
              itemadded={this.state.itemadded}
              logged={this.state.logged}/> }/>
              <Route path='/Account' render={()=> <Account logged={this.state.logged} 
              email={this.state.email} 
              imgurl={this.state.imgurl} 
              name={this.state.name}/>}/>
              <Route path='/Add' render={()=> <Add Sendurl={this.Sendurl}  logged={this.state.logged}/>}/>
              
          </Switch>
          
          <Footer/>
         
          </Router>
      
          </ThemeProvider>
          
         
    </div>)
    
  }


  Sendurl=async(title,description,link)=>{
    if(this.state.email ){
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

   


  }
  DeleteUrl= (index)=>{
  
    firebase
    .firestore()
    .collection(this.state.email)
    .doc(index)
    .delete()
    
 
  }

  update_redirect=()=>{
    this.setState({
      redirect:null
    })
  }
  getLink=()=>{
    
  
      firebase
      .firestore()
      .collection(this.state.email)
      .onSnapshot(serverUpdate=>{ 
        const url = serverUpdate.docs.map(_doc=>{
          const data = _doc.data();
          data['id']= _doc.id;
          return data
        });// create array of result of a fonction
        console.log(url)
        this.setState({ url: url });
      });// call after collections is updated
    
    console.log('get link')
  }

  getUsers=(user)=>{
    if(user){
      this.setState({
        logged:true,
        name:user.name,
        email:user.email,
        imgurl:user.imgurl,

      }).then(this.getLink())

      console.log(user)

    }else{
      console.log('CANNOT GET INFO')
    }
   

  }
  logout=()=>{
    this.setState({logged:null})
  }

}


export default App;
