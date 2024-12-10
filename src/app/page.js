"use client"

import React, { useState } from "react";
import Navbar from "@/components/Navbar_components/Navbar";
import Feeds from "@/components/MainContent/Feeds";
import SideBar from "@/components/SideContents/SideBar";

export default function Home() {  

  const [ count, setCount ] = useState("data") 

  return (
   <div className="container page_container">     
      <Navbar/>  

      <div className="con">    
        <SideBar/>    
        <Feeds/>           
      </div>     

   </div>   
  );     
}




// https://rapidapi.com/omarmhaimdat/api/youtube-v2/playground/apiendpoint_0690d7e5-ce41-4082-a0e7-ac5afc12c70e