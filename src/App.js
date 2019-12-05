import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ComponentM from './ComponentM'
import Grid from '@material-ui/core/Grid';
import Information from './Information'
import Imenu from './IMenu'
class App extends React.Component {
   constructor() {
      super();
      this.state = {

      }

 
   }

    
   render() {
     
      return (
          <Grid container spacing={1}>
             <Grid item xs={9}>
                <Information/>
             </Grid>
             <Grid item xs={3}>
                <Imenu/>
             </Grid>

          </Grid>



      );
   }


}

export default App;