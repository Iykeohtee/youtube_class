"use client"   

import { createContext, useState, useEffect } from "react";
import { SearchVidoes } from "@/utils/fetchData";


export const SearchContext = createContext(); // initializing a context called "                                                         SearchContect"

export const SearchProvider = ({children}) => {
    const [ result, setResult ] = useState([])   

    useEffect(() => {
       const fetchDefaulVideos =  async () => {
        const data = await SearchVidoes('search/?query=trending')  
        setResult(data.videos)    
       }

       fetchDefaulVideos();
    }, [])       


    return(
        <SearchContext.Provider value={{result, setResult}}>  
          {children}
        </SearchContext.Provider>
    )
}



