import { createContext, useContext, useState } from "react";



export const SearchContext=createContext()

export const SearchContextProvider=({children})=>{
 const [showList,setShowList]=useState(false)
 const [query,setQuery]=useState('')


    return <SearchContext.Provider value={{showList,setShowList,query,setQuery}}>
        {children}
    </SearchContext.Provider>
}


export const useSearch=()=>{
    return useContext(SearchContext)
}