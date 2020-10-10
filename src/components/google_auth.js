import { GoogleLogin,GoogleLogout}  from 'react-google-login';
import React from 'react'




class Auth extends React.Component{
    constructor(){
        super();
       

        

    }
    render(){
      const{logged}=this.props
      if(!logged){
        return(   <GoogleLogin
          clientId="153360537276-ir5ao4bhdubd31fi77mp504uomldefn5.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle.bind()}
          onFailure={this.responseGoogle.bind()}
          cookiePolicy={'single_host_origin'} />
          )
     }else{
        return(  <GoogleLogout
          clientId="153360537276-ir5ao4bhdubd31fi77mp504uomldefn5.apps.googleusercontent.com"
          buttonText='Logout'
          onLogoutSuccess={ this.logout }
          onFailure={ this.handleLogoutFailure }
        ></GoogleLogout>
          
        )
      }
      

            
       
          
    }
    logout=()=>{
      this.props.logout()
    }
    handleLogoutFailure=()=>{
      console.log('ERROR CANNOT LOGOUT')
    }
    getUsers=(user)=>{
      this.props.getUsers(user)
    }
    responseGoogle = (googleUser) => {
      if (googleUser){
        var profile = googleUser.getBasicProfile();
        var user={
          id :profile.getId(),
          name:profile.getName(),
          imgurl:profile.getImageUrl(),
          email:profile.getEmail()
        }
        this.props.getUsers(user)
      }else{
        console.log('ERROR GOOGLE LOGIN')
      }
    }
  
   
}



export default Auth;