import { createContext } from "react"; 
import { Doctors } from "../assets/assets";

export const AppContext= createContext() 
const AppContextProvider= (props)=> { 
   const currencySymbol='$'
      const value ={

Doctors ,
currencySymbol
} 
return( <AppContext.Provider value={value}>
    {props.children} 
   
    </AppContext.Provider>
     
   ) }

export default AppContextProvider;