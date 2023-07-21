import React from 'react'

const VideoCard = (item) => {
  // console.log(item)
  const{snippet} = item
  const{statistics} = item
  if(!item){
    return null;
  }
  return (
    <div className='md:w-80 w-[100%] flex flex-col gap-2 text-base  md:text-sm shadow-md md:shadow-none  md:hover:shadow-md p-2 rounded-md md:p-2  '>
      <img src={snippet?.thumbnails?.medium?.url} alt="" className=" rounded-md w-screen" />
      <div className="flex flex-col ">
        <span className="font-semibold">{item?.snippet?.title.slice(0,75)}</span>
        <div className=" flex items-center gap-2 opacity-60 mt-2">
        <span className="text-sm md:text-xs font-medium">{snippet?.channelTitle}</span>
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon  " style={{pointerEvents: 'none', display: 'block', width: '0.8rem', height: '0.8rem'}}><g className="style-scope yt-icon"><path d="M12,2C6.5,2,2,6.5,2,12c0,5.5,4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M9.8,17.3l-4.2-4.1L7,11.8l2.8,2.7L17,7.4 l1.4,1.4L9.8,17.3z" className="style-scope yt-icon"></path></g></svg>
        </div>
        <div className="text-sm md:text-xs mb-2 flex items-center gap-2 font-medium opacity-70">
          <span className="">{(statistics.viewCount/1000000).toFixed(1)}M views</span>
          <div className="bg-gray-500 w-1 h-1 rounded-full"></div>
          <span className="">{Math.floor(Math.random()*15) + 5} hours ago</span>
        </div>
      </div>
    </div>
  )
}
// export const AdCard = (item) =>{
//   return <div className="border border-red-800">
//     <VideoCard info={{item}}  />
//   </div>
// }

export default VideoCard;
