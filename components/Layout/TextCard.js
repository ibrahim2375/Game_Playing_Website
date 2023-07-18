import Image from "next/image";
import React from "react";

function TextCard({ data }) {
  return (
    <div className="card relative pb-4">
      {/* dot for active card */}
      {data?.active && (
        <span className=" flex justify-center items-center h-3 w-3 absolute -top-4 left-0 ">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full active_card"></span>
          <span className="h-2 w-2 rounded-full active_card"></span>
        </span>
      )}
      {/* content */}
      <div>
        {/* image */}
        <Image
          className="w-full"
          src={`/topics/${data?.img}`}
          width="400"
          height="300"
          alt="topics"
        />
        {/* description */}
        <p className="mt-10 px-3">{data?.description}</p>
      </div>
      {/* footer */}
      <div className="card_footer flex items-center px-3">
        <h1 className="text-3xl">{data.date}</h1>
        <h2 className="text-sm transform rotate-90">{data?.year}</h2>
      </div>
    </div>
  );
}

export default TextCard;
