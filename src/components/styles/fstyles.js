
const fstyles = (theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    txt: {
        marginRight:"150%"
    },
    main: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(2),
    },
    footer: {
      padding: theme.spacing(3, 2),
      marginTop: 'auto',
      backgroundColor:theme.palette.grey[300]
     
    },
  });

export default fstyles