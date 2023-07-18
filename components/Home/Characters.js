"use client";
import Image from "next/image";
//com
import Button from "../Layout/Button";
//css
import "../../css/Home/Characters.css";
//icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
//data
import { characters } from "../../data/characters";
import { useState } from "react";
function Characters() {
  const [currentIndex, setCurrentIndex] = useState(0);

  //handle navigate by buttons
 const prev_btn = () => {
   let newIndex = currentIndex === 0 ? characters.length - 1 : currentIndex - 1;
   setCurrentIndex(newIndex);
 }
 const next_btn = () => {
  let newIndex = currentIndex === characters.length - 1 ? 0 : currentIndex + 1;
  setCurrentIndex(newIndex);
 }
  return (
    <div className="px-10 my-24">
      <header className="flex justify-between items-center gap-10">
        <h1 className="left_padding characters_title text-4xl ">CHARACTERS</h1>
        <ul className="navigate_links flex flex-wrap items-end gap-1">
          {characters.map((character) => (
            <li key={character.id} className="relative cursor-pointer">
              <Image
                className="transition-all  duration-500 filter grayscale hover:grayscale-0 "
                style={{ border: ".1px solid gray" }}
                src={`/characters/${character.img}`}
                width="150"
                height="70"
                alt={character.name}
              />
              {/* charachter name */}
              <p className="absolute bottom-0 right-1">{character.name}</p>
            </li>
          ))}
        </ul>
      </header>
      {/* slider */}
      <div className="slider relative my-24">
        <div
          style={{ backgroundImage: `url(/characters/${characters[currentIndex].bg})` }}
          className="w-full h-[600px] bg-center bg-cover duration-300"
        >
          {/* <div className="content">
          <h1>title</h1>
         </div> */}
        </div>
        {/* arrows */}
        {/* left */}
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] -left-5">
          <Button text={<IoIosArrowBack />} action={prev_btn} />
        </div>
        {/* right */}
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] -right-5">
          <Button text={<IoIosArrowForward />} action={next_btn}/>
        </div>
      </div>
    </div>
  );
}

export default Characters;
