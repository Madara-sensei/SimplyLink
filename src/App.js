import React from 'react';
import Url from './components/urls_display'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Account from './components/account'
import Add from './components/add'
import { BrowserRouter as Router, Switch,Redirect, Route} from 'react-router-dom';
import theme from './components/theme'
import {ThemeProvider} from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import mainStyles from './components/styles/mainstyles'
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
          {this.state.logged ?  
            <Switch>
              <Route  path='/Link' render={() =><Url url={this.state.url} 
              DeleteUrl={this.DeleteUrl} 
              redirect= {this.state.redirect}
              update_redirect= {this.update_redirect}
              itemadded={this.state.itemadded}/> }/>
              <Route path='/Account' render={()=> 
              <Account
              email={this.state.email} 
              imgurl={this.state.imgurl} 
              name={this.state.name}/>}/>
              <Route path='/Add' render={()=> <Add Sendurl={this.Sendurl} />}/>
              
            </Switch>:
            <div>
            <Typography className={this.props.classes.ntlog} color='secondary' variant='h3'>You need to be logged to use SimplyLinks .</Typography>
            </div>}
        
         
          <Footer/>
          </Router>
      </ThemeProvider>
    </div>
    )
  }
  componentDidMount=()=>{
    this.getLink()
  }
  Sendurl=async(title,description,link)=>{
    if(this.state.email ){
      await firebase
      .firestore()
      .collection('url')
      .add({
        email:this.state.email,
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
    .collection('url')
    .doc(index)
    .delete()
  }

  update_redirect=()=>{
    this.setState({
      redirect:null
    })
  }
  
  getLink=async()=>{
      await firebase
      .firestore()
      .collection('url').where('email',"==",this.state.email)  
      .onSnapshot(serverUpdate=>{ 
        const url = serverUpdate.docs.map(_doc=>{
          const data = _doc.data();
          data['id']= _doc.id;
          return data
        });
        console.log(url)
        this.setState({ url: url });
      });
  }

  getUsers=(user)=>{
    if(user){
      this.setState({ 
        logged:true,
        name:user.name,
        email:user.email,
        imgurl:user.imgurl,

      })
      this.getLink()

      console.log(user)

    }else{
      console.log('CANNOT GET INFO')
    }
  }
  logout=()=>{
    this.setState({logged:null})
  }

}


export default withStyles(mainStyles)( App);
