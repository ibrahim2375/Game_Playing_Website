//css
import "../../css/Home/Story.css";

function Story() {
  return (
    <div className="story px-10">
      <div className="content left-padding px-20 flex flex-col justify-center gap-10">
        <h1 className="text-mask  mt-5 text-4xl md:text-6xl">Story</h1>
        <p className="story_description max-w-3xl">
          6 years have passed since the biological disaster in Raccoon City.
          Leon S. Kennedy, one of the survivors of the incident, has been
          recruited as an agent reporting directly to the president of the
          United States. With the experience of multiple missions on his back,
          Leon is sent to rescue the president's kidnapped daughter. He tracks
          her to a secluded European village, where there is something terribly
          wrong with the villagers. And the curtain rises on this story of
          daring rescue and grueling horror.
        </p>
      </div>
    </div>
  );
}

export default Story;
