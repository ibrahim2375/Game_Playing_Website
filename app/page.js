//components
import Landing from "@/components/Home/Landing";
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
        {/* for testing next section */}
        <div className="flex items-center justify-center gap-10 px-10 py-24">
          <Topics />
          <Topics />
          <Topics />
          <Topics />
        </div>
      </main>
    </div>
  );
}
