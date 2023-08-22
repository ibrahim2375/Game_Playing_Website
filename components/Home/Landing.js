"use client";
import Image from "next/image";
//com
import SocialMedia from "./SocialMedia";
//css
import "../../css/Home/Landing.css";
function Landing() {
  const devices = [
    "/devices/ps4_b.svg",
    "/devices/ps5_b.svg",
    "/devices/xboxxs_b.svg",
    "/devices/steam_b.svg",
  ];
  return (
    <div className="relative">
      <div className="w-full h-screen flex flex-col justify-center gap-16 left-padding">
        {/* logo image */}
        <Image
          className="mt-44 w-[500px] h-[300px] md:w-[500px] md:h-[300px]"
          src="/logo/logo-re.svg"
          width="700"
          height="500"
          alt="logo"
        />
           {/* social media links */}
           <SocialMedia />
        {/* hint */}
        <p className="text-mask text-3xl md:text-4xl font-semibold">
          Available Now
        </p>
        {/* devices */}
        <div className="flex  items-center gap-10">
          {devices.map((device) => (
            <Image
              key={device}
              className="w-[90px] lg:w-[150px] md:h-full"
              src={device}
              width="150"
              height="100"
              alt="device image"
            />
          ))}
        </div>
        {/* users number use */}
        <div className="users_overview w-48 bg-black py-5 px-2 absolute top-1/4 right-0">
          <p className="text-lg font-semibold">Over <span className="number_of_users">4 Million</span> Units Sold Worldwide!</p>
        </div>
     
      </div>
    </div>
  );
}

export default Landing;
