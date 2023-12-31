import Image from "next/image";
//css
import "../../css/Home/About.css";
//data
import {about_images} from '../../data/about'

function About() {

  return (
    <div className="px-10 mt-24 about">
      <div className="content px-20 flex flex-col justify-center gap-10 left-padding">
        <h1 className="text-mask mt-5 text-4xl md:text-6xl">ABOUT</h1>
        <h1 className="about_description text-4xl md:text-8xl max-w-2xl">Survival is just the beginning</h1>
        <p className="max-w-2xl">
          Resident Evil 4 is a remake of the 2005 original Resident Evil 4.
          Reimagined for 2023 to bring state-of-the-art survival horror.
          Resident Evil 4 preserves the essence of the original game, while
          introducing modernized gameplay, a reimagined storyline, and vividly
          detailed graphics to make this the latest survival horror game where
          life and death, terror and catharsis intersect.
        </p>
      </div>
      <div className="flex items-center justify-center md:justify-between flex-wrap gap-5">
        {about_images?.map(img => <Image key={img.id} className="max-w-xl" src={`/images/${img.img}`} width='500' height='400' alt="img"/>)}
      </div>

    </div>
  );
}

export default About;
