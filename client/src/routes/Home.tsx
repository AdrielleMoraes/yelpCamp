import React from 'react'
import Header from "../Components/Header"
import RestaurantFilter from "../Components/RestaurantFilter"
import RestaurantTable from "../Components/RestaurantTable"

function Home() {
   return (
      <div>
         <Header/>
         <RestaurantFilter/>
         <RestaurantTable/>
      </div>
   )
}

export default Home
