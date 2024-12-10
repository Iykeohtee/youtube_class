import React from 'react'
import Image from 'next/image'
import { RxHamburgerMenu } from "react-icons/rx";
import SearchBar from './SearchBar';
import YoutubeImage from './YoutubeImage';
import { SideContext } from '@/contexts/SideContext';
import { useContext } from 'react';

const Navbar = () => {

  const { toggle, setToggle } = useContext(SideContext)  

  const handleChange = () => {
    setToggle((prev) => !prev)  
  }

  return (
    <div className='flex gap-14'>

        <div className='flex items-center gap-6 ml-7'>   
        <RxHamburgerMenu onClick={handleChange}/>   
        <YoutubeImage/> 
       </div> 


       <div>
        <SearchBar/>  
           
       </div>
  
    </div>
  )
}

export default Navbar
