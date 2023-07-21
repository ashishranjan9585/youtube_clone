import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { POPULAR_VIDEO_URL } from '../utils/Helper'
import { Link } from 'react-router-dom'

const VideoContainer = () => {
    const[videos,setVideos] = useState([])
    useEffect(()=>{
        getData()
    },[])
    const getData = async ()=>{
        const url = await fetch(POPULAR_VIDEO_URL)
        const data = await url.json()
        console.log(data?.items[0])
        setVideos(data?.items)
    }
  return (
    <div className='md:my-2 flex flex-wrap md:gap-6 w-full my-2 gap-2   '>
      {/* <AdCard/> */}
      {videos.map(item=>(
      <Link to={"/watch?v=" + item.id } key={item.id}>
         <VideoCard  {...item} /> 
        </Link>
      ))}
    </div>
  )
}

export default VideoContainer
