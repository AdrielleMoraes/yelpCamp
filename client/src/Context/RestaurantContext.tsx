import React, {useState, createContext } from "react";



type Props = {
   children: React.ReactNode;
 };

type RestaurantContextType = {
   restaurants: string;
   setRestaurants: (value: string) => void;
}

const defaultRestaurant = "Default";

export const RestaurantContext = createContext<RestaurantContextType|undefined>(undefined);

export const RestaurantContextProvider = ({children}: Props) =>{

   const [restaurants, setRestaurants] = useState(defaultRestaurant);

   React.useEffect(()=>{
      const currentRestaurant = "First";
      setRestaurants(currentRestaurant);
   },[]);
   return(
      <RestaurantContext.Provider value={{restaurants, setRestaurants}}>
         {children}
      </RestaurantContext.Provider>
   )
}