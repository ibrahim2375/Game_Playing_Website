import Image from "next/image";
import "../../css/Home/Topics.css";
import CardSlider from "../Layout/CardSlider";


function Topics() {
  return (
    // Topics Section
    <section>
      {/* demo */}
       <div className="left-padding flex gap-10">
        {/* img */}
        <Image className="w-[300px] h-[100px] md:h-[150px] md:w-[400px]" src='/images/demo.png' width='400' height='150' alt="demo img" />
        {/* text */}
        <div>
          <h1 className="text-mask text-2xl md:text-4xl">Demo Available Now!</h1>
          <p className="mt-5 tracking-wider">No timw Limit; no play limit</p>
        </div>
       </div>
       {/* divider section */}
       <div className="divider_section flex items-center gap-5 mt-8">
         <span className="line w-32 md:w-40"></span>
         <span className="title text-xl md:text-2xl">DEMO</span>
         <span className="relative line w-1/3 after:content-[''] after:absolute after:-top-2 after:right-0 after:w-3 after:h-0.5 after:bg-red-600 after:rotate-45"></span>
       </div>
      {/* card slider */}
      <CardSlider title={'TOPICS'} type={'card'} />
      {/* card slider */}
      <CardSlider title={'TRAILER'} type={'video'}/>
    </section>
  );
}

export default Topics;
