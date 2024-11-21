"use client"  

import React from 'react'
import { SearchVidoes } from '@/utils/fetchData'
import { useState } from 'react'

const SearchBar = () => {

     const [ count, setCount ] = useState(0);

    function update() {
        setCount(count+1)  
    }

  return (
    <div>
    <form>
    <input type="text" placeholder='Search..'/>
    <button>
        Search
    </button>
    </form>

      <h1>{count} </h1>  
      <button onClick={update}> 
        Update count
      </button>
    </div>
  )
}
   
export default SearchBar     
