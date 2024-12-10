// this cmponent accepted props "cou" from the page.js

import React, { useContext, useState, useEffect } from 'react'
import { SearchContext } from '@/contexts/SearchContext'
import { SearchVidoes } from '@/utils/fetchData'
import styles from './Feeds.module.css'  

const Feeds = () => {   

  const { result, setResult } = useContext(SearchContext) 
  const [ playingVideo, setPlayingVideo ] = useState(null)  // state to track video playing
  const [ hoveredVideo, setHoveredVideo ] = useState(null)


  //  function to play video related t the thumbnail
  const handlePlayVideo = (params) => {
    setPlayingVideo(params)     
  }
  
  const handleMouseEnter = (videoId) => {
    setHoveredVideo(videoId)
  }

  const handleMouseLeave = () => {
    setHoveredVideo(null)  
  }
  

  return (
    <div className={styles.container}>   
      {
        result.map((eachItem, index, array) => (
          <div key={index} className={styles.content}>  
            {
              hoveredVideo === eachItem.video_id ? (
                <iframe 
                src={`https://www.youtube.com/embed/${eachItem.video_id}?autoplay=1`}
                allow="autoplay"
                allowFullScreen  
                >
                </iframe>     
              ) :
              playingVideo === eachItem.video_id ? 
              <iframe 
              src={`https://www.youtube.com/embed/${eachItem.video_id}?autoplay=1`}
              allow="autoplay"
              allowFullScreen  
              >
              </iframe>
              : 
              (
                <div>
                  <img src={eachItem.thumbnails[0].url} alt="image" onClick={() => handlePlayVideo(eachItem.video_id)}
                   onMouseEnter={() => handleMouseEnter(eachItem.video_id)}
                   onMouseLeave={() => handleMouseLeave}
                  />   
                </div>
              )
            }
               <h1>{eachItem.title}</h1>
                  <p>{eachItem.description}</p> 
                  <p>{eachItem.number_of_views}</p>
                  <p>{eachItem.video_length}</p>
                  <p>{eachItem.published_time}</p>  
          </div>
        ))    
      }
    </div>
  )
}

export default Feeds
