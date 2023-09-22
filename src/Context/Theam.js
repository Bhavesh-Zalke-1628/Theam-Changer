import { createContext,useContext } from "react";

export const TheamContext = createContext({
    theamMode : 'light',
    darkTheam : () => {

    },
    lightTheam : () => {
        
    }
})

export const Theamprovider =  TheamContext.Provider

export default function useTheam(){
    return useContext(TheamContext)
}