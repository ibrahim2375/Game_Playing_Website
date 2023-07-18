import Image from 'next/image'
import React from 'react'

function TextCard() {
  return (
    <div className="card relative pb-4">
    {/* dot for active card */}
    <span className=" flex justify-center items-center h-3 w-3 absolute -top-4 left-0 ">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full active_card"></span>
      <span className="h-2 w-2 rounded-full active_card"></span>
    </span>
    {/* content */}
    <div>
      {/* image */}
      <Image
        className="w-full"
        src="/images/topics1.jpg"
        width="400"
        height="300"
        alt="topics"
      />
      {/* description */}
      <p className="mt-10 px-3">
        We are conducting a product survey for those who have played
        the game. For taking part in the survey, participants will
        receive an original wallpaper!
      </p>
    </div>
    {/* footer */}
    <div className="card_footer flex items-center px-3">
      <h1 className="text-3xl">7/17</h1>
      <h2 className="text-sm transform rotate-90">2023</h2>
    </div>
  </div>
  )
}

export default TextCard