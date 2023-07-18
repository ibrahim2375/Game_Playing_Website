"use client";
import { useEffect, useRef } from "react";
//css
import "../../css/Layout/CardSlider.css";
//com
import Button from "./Button";
//icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
//functions
import { ScrollByMouse } from "@/functions/ScrollByMouse";
//com
import TextCard from "./TextCard";
import VideoCard from "./VideoCard";

//variables for scrolling
let scrollLeft = 0;
let startX;
let isDown = false;

function CardSlider({ title, type }) {
  const slider_ref = useRef();
  //  scroll left button
  const scrollLeft_btn = () => {
    slider_ref.current.scrollLeft -=
      slider_ref.current.getBoundingClientRect().width;
  };
  //  scroll right button
  const scrollRight_btn = (_) => {
    slider_ref.current.scrollLeft +=
      slider_ref.current.getBoundingClientRect().width;
  };
  //handle scrolling by mouse
  useEffect(() => {
    ScrollByMouse(slider_ref, startX, scrollLeft, isDown);
  }, [isDown]);

  return (
    <div className="my-36">
      <header className="flex justify-between items-center mb-5 left_padding px-10">
        <h1 className="card_sidebar_title text-4xl font-bold">{title}</h1>
        {/* scroll arrows */}
        <div className="flex items-center gap-5">
          {/* line */}
          <div className="scroll_progress relative">
            <div className="progressbar h-full"></div>
          </div>
          {/* arrows */}
          <div className="flex items-center gap-3">
            <Button text={<IoIosArrowBack />} action={scrollLeft_btn} />
            <Button text={<IoIosArrowForward />} action={scrollRight_btn} />
          </div>
        </div>
      </header>
      {/* cards section */}
      <div
        ref={slider_ref}
        className={`cards row  overflow-x-auto  flex items-center gap-10 py-10 left_padding pr-10`}
      >
        {type === "card"
          ? // ----------------------------------------- card text an image -----------------------------------------
            Array.from({ length: 10 }).map((i, index) => (
              <TextCard key={index}/>
            ))
          : // ----------------------------------------- videoe ---------------------------------------------------
            Array.from({ length: 10 }).map((i, index) => (
               <VideoCard key={index}/>
            ))}
      </div>
    </div>
  );
}

export default CardSlider;