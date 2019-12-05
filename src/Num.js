import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({

     num: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
       
     },

   
  }));
 
  export default function Num() {


    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();
 
   return (
   <div>
        <TextField
          id="standard-basic"
          className={classes.num}
          label="Standard"
          margin="normal"
        />
   </div>
   );
 }