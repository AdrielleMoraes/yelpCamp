import React, {useState, createContext, FunctionComponent } from "react";



type Props = {
   children: React.ReactNode
 };

type RestaurantProps = {
   id: number,
   name: string,
   location: string,
   price_range: number,
   rating: number
}

const defaultRestaurant: RestaurantProps = {
   id: 0,
   name: "First",
   location: "Ireland",
   price_range: 3,
   rating: 4
};

export const RestaurantContext = createContext(defaultRestaurant);

export const RestaurantContextProvider = ({children}: Props) =>{

   const [restaurants, setRestaurants] = useState(defaultRestaurant);

   React.useEffect(() => {
      // We'd get the restaurants from a web API / local storage 
      const currentRestaurant = {
         id: 0,
         name: "First",
         location: "Ireland",
         price_range: 3,
         rating: 4
      };
      setRestaurants(currentRestaurant);
    }, []);

   return(
      <RestaurantContext.Provider value={restaurants}>
         {children}
      </RestaurantContext.Provider>
   )
}