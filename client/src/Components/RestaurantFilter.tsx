import React from 'react'
import Rating from '@material-ui/lab/Rating';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
   
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

function RestaurantFilter() {
   const [value, setValue] = React.useState<number | null>(2);
   const classes = useStyles();

   return (
      <div className="container">
         
      <form className={classes.root} noValidate autoComplete="off">
         <TextField id="outlined-basic" label="Name" variant="outlined" />
         <TextField id="outlined-basic" label="Location" variant="outlined" />
         <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
               setValue(newValue);
            }}
         />
         <Button variant="contained" color="primary">
            Primary
         </Button>
      </form>

      </div>
   )
}

export default RestaurantFilter
