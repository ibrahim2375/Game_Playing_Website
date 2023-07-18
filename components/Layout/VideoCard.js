'use client'
import Image from "next/image";
import {useState} from 'react'
//youtube to show videas from youtube
import YouTube from "react-youtube";
//icons
import { AiFillYoutube } from "react-icons/ai";
import { MdOutlineCloseFullscreen } from "react-icons/md";
function VideoCard({ data }) {
  const [show, setShow] = useState(false);

  //youtube options
  const opts = {
    height: "850",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const onReady = (event) => {
    // access to player in all event handlers via event.target
    // event.target.pauseVideo();
  };

  //handle video to show by youtube link code - id
  const showTrailer = () => {
    setShow(true);
  }
  const hideTrailer = () => {
    setShow(false);
  }
  return (
    <div className="video relative">
      {/* dot for active card */}
      {data?.active && (
        <span className=" flex justify-center items-center h-3 w-3 absolute -top-9 left-0 ">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full active_card"></span>
          <span className="h-2 w-2 rounded-full active_card"></span>
        </span>
      )}
      {/* vedio */}
      <div className="video_poster flex justify-center items-center group">
        <AiFillYoutube className="youtube_icon text-8xl group-hover:text-red-700 absolute  z-1" onClick={showTrailer} />
        <Image
          className="w-full"
          src={`/videosPosters/${data.poster}`}
          width="400"
          height="300"
          alt="topics"
        />
      </div>
      {
        //when click on play video this well display to load the video
        show && (
          <div className={`${show ? 'fixed' : 'none'}  bg-black top-24 left-24 right-24 bottom-24 z-10 `}>
          <MdOutlineCloseFullscreen className="absolute -top-5 right-0 z-10 text-3xl hover:text-red-700" onClick={hideTrailer} />
            <YouTube videoId={`${data?.linkCode}`} opts={opts} onReady={onReady} />
        </div>
        )
      }
    
    </div>
  );
}

export default VideoCard;
