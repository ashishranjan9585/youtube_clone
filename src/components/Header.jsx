import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/AppSlice";
import { cacheResults } from "../utils/searchSlice";
const Header = () => {
  const[searchQuery,setSearchQuery] = useState('')
  const[suggestionList,setSuggestionList] = useState([])
  const[viewList,setViewList] = useState(false)
  const searchCache = useSelector((store) => store.search);
  useEffect(()=>{
    const timer = setTimeout(() => {
      if(searchCache[searchQuery])
       setViewList(searchCache[searchQuery]);
       else  getSuggestions();
      }, 200);
    
      return ()=>{
      clearTimeout(timer)
    }
  },[searchQuery])
  const getSuggestions = async ()=>{
    const url = await fetch(`http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchQuery}`)
    const data = await url.json()
   // console.log(data)
    setSuggestionList(data[1])
    // setViewList(true)
   //update cache
    dispatch(
      cacheResults({
        [searchQuery] : data[1],
      })
    );
  };
   
  
  const dispatch = useDispatch();
  function toggleSidebar() {
    dispatch(toggleMenu());
  }


  return (
    <div className="bg-white border flex items-center justify-between px-2 md:px-4 py-2 fixed w-full z-50 ">
      <div className="flex items-center  md:ml-3 gap-2 md:gap-8">
        <img
          onClick={() => toggleSidebar()}
          className="md:h-7 h-8"
          src="https://th.bing.com/th/id/OIP.-nG_tVptnf4oGmIzd7dKVgHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.7&pid=1.7"
          alt=""
        />
      <img className="h-10 md:hidden" src="https://th.bing.com/th/id/OIP.zjMhUcihfwmLxS5W3NBpMgHaHa?w=180&h=180&c=7&r=0&o=5&dpr=1.7&pid=1.7" alt="" />
        <img
          className="md:h-10 hidden md:block"
          src="https://1000marcas.net/wp-content/uploads/2020/02/YouTube-logo.png"
          alt=""
        />
      </div>
      <div className="flex flex-col">
      <div className="flex border border-gray-400 rounded-full text-sm">
        <input
          type="text"
          className="outline-none px-4 md:px-4 md:py-2 md:w-96 rounded-full border-r focus:bg-gray-100 rounded-r"
          placeholder="Search for a video"
          autoFocus
          value={searchQuery}
          onChange={(e)=> setSearchQuery(e.target.value)}
          onBlur={()=>setViewList(false)}
          onFocus={()=>setViewList(true)}
        />
        <button className="outline-none px-2 md:px-4 py-2 focus:bg-gray-100 rounded-full rounded-l">
          Search
        </button>
          </div>
        {suggestionList.length !==0 && viewList ? <ul className="bg-white w-96 px-2 rounded border flex flex-col gap-1 text-sm py-2 fixed top-14">
          { suggestionList.map(item=>{
            return <li key ={item} className="flex items-center gap-2 hover:bg-gray-200 px-2 py-1 rounded">
            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon" style={{pointerEvents: 'none', display: 'block', width: '1rem' , height: '1rem'}}><g className="style-scope yt-icon"><path d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z" className="style-scope yt-icon"></path></g></svg>
            {item}</li>
          })}
        </ul> : null}
      </div>
      <div className="hidden md:block">
        <img
          className="h-5 mr-4"
          src="https://smashinglogo.com/static/img/virtual-designers/peter.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
