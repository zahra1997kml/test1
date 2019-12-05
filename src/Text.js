import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({

     textField: {
       width:600,
       
       
     },

   
  }));
 
  export default function Text() {


    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();
 
   return (
   <div>
     <TextField
          id="outlined-multiline-static"
          label="text"
          multiline
          rows="4"
          defaultValue=""
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
   </div>
   );
 }