//icons
import {
  BsYoutube,
  BsTwitter,
  BsFacebook,
  BsInstagram,
  BsDashLg,
} from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";

function SocialMedia() {
  return (
    <div className="flex flex-col items-center gap-3 absolute -right-20 top-1/2">
      <h1 className="font-bold transform rotate-90 mb-10">FOLLOW US</h1>
      <BsDashLg className="link text-2xl" />
      {/* icons */}
      <BsYoutube className="link  text-2xl" />
      <BsTwitter className="link text-2xl" />
      <BsFacebook className="link text-2xl" />
      <BsInstagram className="link text-2xl" />
      <BsDashLg className="link text-2xl" />
      <TfiEmail className="link text-2xl" />
    </div>
  );
}

export default SocialMedia;
