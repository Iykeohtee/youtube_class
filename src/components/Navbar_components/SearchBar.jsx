"use client"  

import React from 'react'
import { SearchVidoes } from '@/utils/fetchData'
import { useState, useContext } from 'react'
import Image from 'next/image'
import { SearchContext } from '@/contexts/SearchContext'

const SearchBar = () => {   

  const { result, setResult } = useContext(SearchContext);      

  const [ loading, setLoading ] = useState(false)         
  const [ ask, setAsk ] = useState("")

  const handleSearch = async (e) => {   
      e.preventDefault();   
      setLoading(true)    

      const data = await SearchVidoes(`search/?query=${ask}`)   
      console.log(data)  
      setResult(data.videos)      
      setLoading(false)  
  }

  return (
    <div>

    <form onSubmit={handleSearch}> 

    <input type="text" placeholder='Search..'
      value={ask} 
       onChange={(e) => setAsk(e.target.value)}   
    />
    <button>
        Search
    </button>

    </form>

    {
      loading ? <p>Loading...</p> : null 
    }


    {/* {
      result.map((eachItem, index, array) => (
         <div key={index}> 
          <h1>{eachItem.title}</h1>
          <img src={eachItem.thumbnails[0].url} alt="image" />   
         </div>
      ))
    } */}

    </div>  
  )
}
   
export default SearchBar     
