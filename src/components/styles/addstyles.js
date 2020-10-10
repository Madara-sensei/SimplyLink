
const useStyles = theme => ({
    root:{
      flexGrow: 1,
      marginTop:'7%'
      
      
      
    },
    ntlog:{
      textAlign: 'center',
      marginTop:"2%"

    },
    form: {
      flexGrow:1,
      marginTop:'3%',
      
      textAlign: 'center',
      
      '& > *': {
        margin: theme.spacing(1),
       
      },
    },
    text:{
      textAlign: 'center'
    },
    btn:{
      background:'#e64a19',
      flexGrow:1,
      marginTop:'3%',
      marginLeft:'50%',
   
      textAlign: 'center' 
    
    }
  
  });


export default useStyles