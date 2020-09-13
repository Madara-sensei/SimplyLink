import React from 'react';
import Url from './components/urls_display'
import Navbar from './components/navbar'
import Footer from './components/footer'
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
          <Navbar/>
          <Url url={this.state.url}></Url>
          <Footer/>
          
         
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
}


export default App;
