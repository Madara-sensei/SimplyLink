import { createMuiTheme } from '@material-ui/core/styles';

import deepOrange from '@material-ui/core/colors/deepOrange';
import grey from '@material-ui/core/colors/grey';

const theme = createMuiTheme({
  palette: {
    primary:{
    main:deepOrange[700],
    },
    secondary:{
        main:grey[800],
    } 
    
  },
});
export default theme