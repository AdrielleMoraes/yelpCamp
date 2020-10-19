import React, {useState, createContext } from "react";



type Props = {
   children: React.ReactNode;
 };

 type Restaurant = {
    id: number,
    name: string,
    location: string,
    price_range: number,
    rating: number
 }

type RestaurantContextType = {
   restaurants: Array<Restaurant>;
   //setRestaurants: (value: string) => void;
}


export const RestaurantContext = createContext<RestaurantContextType|null>(null);

export const RestaurantContextProvider = ({children}: Props) =>{

   const [restaurants, setRestaurants] = useState([]);

   React.useEffect(()=>{
      setRestaurants([]);
   },[]);
   return(
      <RestaurantContext.Provider value={{restaurants, setRestaurants}}>
         {children}
      </RestaurantContext.Provider>
   )
}