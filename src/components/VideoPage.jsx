import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/ChatSlice";
import { getRandomName } from "../utils/Helper";

const VideoPage = () => {
  const [searchParams] = useSearchParams();
  const [liveMsg,setLiveMsg] = useState('')
  const myName = getRandomName(Math.floor(Math.random() * 170 + 1));
  // console.log(searchParams.get('v'))
  const dispatch = useDispatch();
  useEffect(() => {
    const id1 = setInterval(() => {
      dispatch(
        addMessages({
          name: `${myName}`,
          comment: "Halla bol 🚀",
        })
      );
    }, 1000);
    return () => {
      clearInterval(id1);
    };
  });
  const allMsgs = useSelector((store) => store.chat.chatMessages);
  return (
    <div className="relative top-16 md:flex md:flex-row flex flex-col w-full md:h-screen h-full  mx-8  gap-4">
      <div className="md:w-2/3 w-full flex flex-col md:h-auto overflow-y-scroll hideScroll">
        <iframe
          className="w-full rounded"
          height="350"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <CommentContainer />
      </div>
      <div className="flex flex-col md:w-1/3 w-full hideScroll gap-2 px-2 py-1 h-[87vh] border border-gray-300 rounded">
      <span className="font-semibold">Top Chat</span>
        <div className="w-full  overflow-y-scroll hideScroll p-2 flex flex-col-reverse gap-2 h-[85%] ">
          {allMsgs.map((item, index) => {
            return <SingleChat key={index} {...item} />;
          })}
        </div>
        <form action="" className="flex gap-1  w-full text-xs"
        onSubmit={(e)=>{
          e.preventDefault()
          dispatch(addMessages({
            name : 'You',
            comment : `${liveMsg}`
          }))
          setLiveMsg('')
        }}
        >
          <input
            type="text"
            placeholder="Write here"
            autoFocus
            className="px-2 py-1  border-b w-4/5 outline-none"
            value={liveMsg}
            onChange={(e)=>setLiveMsg(e.target.value)}
          />
          <button className="px-2 py-1 rounded border w-1/5  outline-none bg-green-200">Send</button>
        </form>
      </div>
    </div>
  );
};
const SingleChat = ({ name, comment }) => {
  return (
    <div className="flex items-center gap-3  text-xs">
      <img
        className="h-6"
        src="https://th.bing.com/th/id/OIP.52T8HHBWh6b0dwrG6tSpVQAAAA?w=248&h=183&c=7&r=0&o=5&dpr=1.7&pid=1.7"
        alt=""
      />
      <span className="whitespace-nowrap font-semibold">{name}</span>
      <span className="whitespace-nowrap">{comment}</span>
    </div>
  );
};

export default VideoPage;
