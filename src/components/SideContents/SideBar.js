import React, { useState } from 'react'
import MiniSideBar from './MiniSideBar'
import MaxiSideBar from './MaxiSideBar'
import { SideContext } from '@/contexts/SideContext'
import { useContext } from 'react'

const SideBar = () => {

  const {  toggle, setToggle } = useContext(SideContext)

  return (
    <div>
      {
        toggle ? <MaxiSideBar/> : <MiniSideBar/>   
      }

    </div>
  )
}

export default SideBar
