const avatar =theme => ({
    name:{
      bottom:0 ,
      position: "absolute",

    },
    root: {

      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
        margin: 'auto'
      },
    },

   
    large: {
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
    divider: {
        width: '100%',
        maxWidth: 750,
        backgroundColor: theme.palette.background.paper,
        margin: 'auto',
        
        bottom: 0,
      },
    name:{
      margin: 'auto',
      
      

    }
  });

export default avatar