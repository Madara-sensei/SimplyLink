import  GoogleLogin  from 'react-google-login';
import React from 'react'




class Auth extends React.Component{
    constructor(){
        super();

    }
    render(){
        return(  
        <GoogleLogin
            clientId="153360537276-ir5ao4bhdubd31fi77mp504uomldefn5.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
          )
    }
    responseGoogle = (response) => {
        console.log(response);
      }
   /* onSignIn=(googleUser)=> {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
      }*/
}



export default Auth;