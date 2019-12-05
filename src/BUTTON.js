import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        width:120,
      },
   
  }));
 
  export default function BUTTON(props) {


    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();
 
   return (
   <div>
       <Button variant="contained" color="secondary" className={classes.button} onChange={props.onChange} >{props.value}</Button>
   </div>
   );
 }