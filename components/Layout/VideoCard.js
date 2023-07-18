//youtube to show videas from youtube
import YouTube from "react-youtube";
//icons
import { AiFillYoutube } from 'react-icons/ai';
import Image from "next/image";
function VideoCard() {
      //youtube options
  const opts = {
    height: "400",
    width: "700",
    playerVars: {
      autoplay: 0,
    },
  };
  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  return (
    <div className="video relative pb-4">
    {/* dot for active card */}
    <span className=" flex justify-center items-center h-3 w-3 absolute -top-9 left-0 ">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full active_card"></span>
      <span className="h-2 w-2 rounded-full active_card"></span>
    </span>
    {/* vedio */}
    <div className="video_poster flex justify-center items-center">
      <AiFillYoutube className="youtube_icon text-8xl hover:text-red-700 absolute  z-0 "/>
      <Image
        className="w-full"
        src="/images/topics1.jpg"
        width="400"
        height="300"
        alt="topics"
      />
    </div>
    {/* <YouTube videoId={'E_s9Ch6c4z0'} opts={opts} onReady={onReady} /> */}
  </div>
  )
}

export default VideoCard