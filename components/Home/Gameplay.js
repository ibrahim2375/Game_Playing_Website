"use client";
import { useState } from "react";
//components
import Preview from "../Layout/Preview";

//icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
//data
import { gameplay } from "../../data/gamplay";
function Gameplay() {
  const [currentIndex, setCurrentIndex] = useState(1);
  // handel navigate btns
  const prev_btn = () => {
    let newIndex = currentIndex === 0 ? gameplay.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const next_btn = () => {
    let newIndex = currentIndex === gameplay.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div id="gameplay" className="px-10 my-24">
      {/* ---------------------------title----------------------- */}
      <header className=" relative flex gap-10 items-center mb-24">
        <h1 className="text-mask left-padding text-2xl md:text-4xl">GAMEPLAY</h1>
        <div className="h-20 w-0.5 bg-white"></div>
      </header>
      {/* -----------------------content----------------------- */}
      <div className="flex gap-10 flex-col md:flex-row justify-between">
        {/* -----------------------left----------------------- */}
        <div className="bg-black/20 pt-5 left-padding flex-auto">
          <div className="flex flex-col gap-10 h-60">
            <h1 className="text-mask text-2xl md:text-4xl">ACTION</h1>
            <h1 className="text-2xl md:text-4xl">{gameplay[currentIndex].title}</h1>
            <p className="max-w-sm">{gameplay[currentIndex].description}</p>
          </div>
          {/* -----------------------pagination----------------------- */}
          <div className="flex items-center gap-6 justify-center select-none mt-32">
            <IoIosArrowBack
              className="pagination_icon text-4xl cursor-pointer"
              onClick={prev_btn}
            />
            {Array.from({ length: gameplay.length }).map((l, index) => (
              <span
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`index_bg w-12 cursor-pointer ${
                  index == currentIndex ? "h-2" : "h-1"
                }`}
              ></span>
            ))}
            <IoIosArrowForward
              className="pagination_icon text-4xl cursor-pointer"
              onClick={next_btn}
            />
          </div>
        </div>
        {/*----------------------- right----------------------- */}
        <div
          style={{
            backgroundImage: `url(/gameplay/${gameplay[currentIndex].poster})`,
          }}
          className="relative bg-cover bg-cenetr bg-no-repeat w-full md:w-1/2 h-[500px] self-end "
        >
          {/* preview button */}
          <div className="absolute bottom-3 left-3">
            <Preview />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gameplay;
