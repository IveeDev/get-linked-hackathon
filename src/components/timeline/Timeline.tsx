import VerticalTime from "../vertical-time/VerticalTime";
import "./Timeline.scss";

const Timeline = () => {
  return (
    <section className="timeline-section">
      <div className="container">
        <div className="textbox">
          <h1>Timeline</h1>
          <p>
            Here is the breakdown of the time we anticipate
            <br /> using for the upcoming event.
          </p>
        </div>

        <div className="timeline-component">
          <VerticalTime />
        </div>
      </div>
    </section>
  );
};

export default Timeline;
