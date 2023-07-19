"use client";
import { useState } from "react";
import Image from "next/image";
//icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
//data
import { locations } from "../../data/locations";
function Locations() {
  const [currentIndex, setCurrentIndex] = useState(3);

  const prev_btn = () => {
    let newIndex = currentIndex === 0 ? locations.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const next_btn = () => {
    let newIndex = currentIndex === locations.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div id="locations" className="px-10">
      {/* ---------------------------title----------------------- */}
      <header className=" relative flex gap-10 items-center">
        <h1 className="text-mask left-padding text-4xl">LOCATION</h1>
        <div className="h-20 w-0.5 bg-white"></div>
        <div>
          <p className="">
            A secluded European village surrounded by a forest,
          </p>
          <p>rumored to be home to an eerie cult.</p>
        </div>
      </header>
      {/* ---------------------------slider----------------------- */}
      <div className="my-10  grid place-items-center select-none">
        <Image
          className="w-2/3 h-full object-contain"
          src={`/locations/${locations[currentIndex].location}`}
          width={"900"}
          height={"100"}
          alt="slider img"
        />
      </div>
      {/* -----------------------controller----------------------- */}
      <div className="flex items-center gap-6 justify-center select-none">
        <IoIosArrowBack
          className="pagination_icon text-4xl cursor-pointer"
          onClick={prev_btn}
        />
        {Array.from({ length: locations.length }).map((l, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`index_bg w-12 cursor-pointer ${
              index == currentIndex ? "h-1" : "h-0.5"
            }`}
          ></span>
        ))}
        <IoIosArrowForward
          className="pagination_icon text-4xl cursor-pointer"
          onClick={next_btn}
        />
      </div>
    </div>
  );
}

export default Locations;
