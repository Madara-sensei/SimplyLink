import React from 'react';
import Url from './components/urls_display'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Account from './components/account'
import Add from './components/add'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
const firebase = require('firebase')


class App extends React.Component{
  constructor(){;
    super ()
    this.state = {
      url:null
    }
  }
  render(){
    return(
    <div>
     
      <Router>
          <Navbar/>
          <Switch>
              <Route  path='/Link' render={() =><Url url={this.state.url}/> }/>
              <Route path='/Account' render={()=> <Account/>}/>
              <Route path='/Add' render={()=> <Add/>}/>
          </Switch>
          
          <Footer/>
         
          </Router>
          
         
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
  deleteUrl=()=>{
    console.log('dsdsd')
  }
}


export default App;
