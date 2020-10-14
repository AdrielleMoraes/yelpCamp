import React from 'react'
import Rating from '@material-ui/lab/Rating';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import Grid from '@material-ui/core/Grid';

import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    select:{
       width: "145px",
    },
    rating:{
       width: "125px",
       paddingTop: "10px",
    },
    addButton:{
       width: "50px",
    }
  }),
);

function RestaurantFilter() {
   const [value, setValue] = React.useState<number | null>(2);
   const classes = useStyles();

   const [price, setPrice] = React.useState('');

   const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      setPrice(event.target.value as string);
   };

   return (         
      <form noValidate autoComplete="off">
         <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
               <TextField id="outlined-basic" label="Name" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
               <TextField id="outlined-basic" label="Location" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
               <FormControl variant="outlined" >
                  <InputLabel id="demo-simple-select-outlined-label">Price Range</InputLabel>
                  <Select
                     className={classes.select}
                     labelId="demo-simple-select-outlined-label"
                     variant="outlined"
                     value={price}
                     onChange={handleChange}
                     label="Price Range"
                  >
                     <MenuItem value={1}>$    </MenuItem>
                     <MenuItem value={2}>$$   </MenuItem>
                     <MenuItem value={3}>$$$  </MenuItem>
                     <MenuItem value={4}>$$$$ </MenuItem>
                  </Select>
               </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
               <Rating
                  className={classes.rating}
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                     setValue(newValue);
                  }}
               />
            </Grid>
            <Grid item xs={12} md={2}>
               <Button variant="contained" color="primary" className={classes.addButton}> 
                  Add
               </Button>
            </Grid>
         </Grid>
      </form>
   )
}

export default RestaurantFilter
