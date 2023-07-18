//components
import About from "@/components/Home/About";
import Characters from "@/components/Home/Characters";
import Landing from "@/components/Home/Landing";
import Story from "@/components/Home/Story";
import Topics from "@/components/Home/Topics";
import Nav from "@/components/Layout/Nav";

export const metadata = {
  title: "Home | RESIDENT EVIL",
  description: "Home Page",
};
export default function Home() {
  return (
    <div className="Home_page">
      <video
        className="h-screen fixed -z-0 object-cover"
        src="bg.mp4"
        muted
        autoPlay
        loop
        style={{ width: "100vw" }}
      ></video>
      <div className="cover fixed -z-0"></div>
      {/* main page */}
      <main className="relative z-1">
        {/* black cover with opacity */}
        <Nav />
        <Landing />
        <Topics />
        <About />
        <Story />
        <Characters />
      </main>
    </div>
  );
}
