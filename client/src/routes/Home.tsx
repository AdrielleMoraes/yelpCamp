import React from 'react'
import Header from "../Components/Header"
import RestaurantFilter from "../Components/RestaurantFilter"
import RestaurantTable from "../Components/RestaurantTable"
import Container from '@material-ui/core/Container';

function Home() {
   return (
      <div>
         <Header/>
         <Container maxWidth="lg">  
            <RestaurantFilter/>
            <RestaurantTable/>
         </Container>
      </div>
   )
}

export default Home
