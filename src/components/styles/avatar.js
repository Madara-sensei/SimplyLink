const avatar =theme => ({
    avt:{
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
        margin: 'auto'
      },

    },
    root: {
      marginTop:'5%'
     },

   
    large: {
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
    divider: {
        width: '100%',
        marginTop:'4%'
       },
    name:{
      textAlign: 'center',
      marginTop:'4%'
      

    }
  });

export default avatar