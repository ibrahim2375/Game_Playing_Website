"use client";
import Image from "next/image";
//com
import SocialMedia from "./SocialMedia";
//css
import '../../css/Home/Landing.css';
function Landing() {
  const devices = [
    "/devices/ps4_b.svg",
    "/devices/ps5_b.svg",
    "/devices/xboxxs_b.svg",
    "/devices/steam_b.svg",
  ];
  return (
    <div className="relative pr-10">
      <div className="w-full h-screen flex flex-col justify-center gap-16 left_padding">
        {/* logo image */}
        <Image className="mt-44" src="/logo/logo-re.svg" width="700" height="500" alt="logo" />
        {/* hint */}
        <p className="hint_text hint_text_red text-5xl font-semibold">Available Now</p>
        {/* devices */}
        <div className="flex  items-center gap-10">
        {devices.map((device) => (
          <Image
          key={device}
          className="h-full"
          src={device}
          width="150"
          height="100"
          alt="device image"
          />
          ))}
        </div>
        {/* social media links */}
        <SocialMedia/>
      </div>
    </div>
  );
}

export default Landing;
