import "./VerticalTime.scss";
import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const VerticalTime = () => {
  return (
    <VerticalTimeline>
      {/* Event 1 */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date={"November, 18 2023"}
        contentStyle={{
          background: "#150e28",
          color: "#fff",
        }}
        iconStyle={{ background: "#d434fe", color: "#fff" }}
        icon={<div className="timeline-circle">1</div>}
      >
        <h2 style={{ fontSize: "2rem", color: "#D434FE" }}>
          Hackathon Announcement
        </h2>
        <p style={{ fontSize: "1.3rem" }}>
          The getlinked tech hackathon 1.0 is formally announced to the general
          public and teams begin to get ready to register
        </p>
      </VerticalTimelineElement>

      {/* Event 2 */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="November 18, 2023"
        contentStyle={{
          background: "#150e28",
          color: "#fff",
        }}
        iconStyle={{
          background: "linear-gradient(270deg, #903AFF 0%, #D434FE 100%)",
          color: "#fff",
        }}
        icon={<div className="timeline-circle">2</div>}
      >
        <h2 style={{ fontSize: "2rem", color: "#D434FE" }}>
          Teams Registration begins
        </h2>
        <p style={{ fontSize: "1.3rem" }}>
          Interested teams can now show their interest in the getlinked tech
          hackathon 1.0 2023 by proceeding to register
        </p>
      </VerticalTimelineElement>

      {/* Event 3 */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="November 18, 2023"
        contentStyle={{
          background: "#150e28",
          color: "#fff",
        }}
        iconStyle={{
          background: "linear-gradient(270deg, #903AFF 0%, #D434FE 100%)",
          color: "#fff",
        }}
        icon={<div className="timeline-circle">3</div>}
      >
        <h2 style={{ fontSize: "2rem", color: "#D434FE" }}>
          Teams Registration ends
        </h2>
        <p style={{ fontSize: "1.3rem" }}>
          Interested Participants are no longer Allowed to register
        </p>
      </VerticalTimelineElement>

      {/* Event 4 */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="November 18, 2023"
        contentStyle={{
          background: "#150e28",
          color: "#fff",
        }}
        iconStyle={{
          background: "linear-gradient(270deg, #903AFF 0%, #D434FE 100%)",
          color: "#fff",
        }}
        icon={<div className="timeline-circle">4</div>}
      >
        <h2 style={{ fontSize: "2rem", color: "#D434FE" }}>
          Announcement of the accepted teams and ideas
        </h2>
        <p style={{ fontSize: "1.3rem" }}>
          All teams whom idea has been accepted into getlinked tech hackathon
          1.0 2023 are formally announced
        </p>
      </VerticalTimelineElement>

      {/* Event 5 */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="November 18, 2023"
        contentStyle={{
          background: "#150e28",
          color: "#fff",
        }}
        iconStyle={{
          background: "linear-gradient(270deg, #903AFF 0%, #D434FE 100%)",
          color: "#fff",
        }}
        icon={<div className="timeline-circle">5</div>}
      >
        <h2 style={{ fontSize: "2rem", color: "#D434FE" }}>
          Getlinked Hackathon 1.0 Offically Begins
        </h2>
        <p style={{ fontSize: "1.3rem" }}>
          All teams whom idea has been accepted into getlinked tech hackathon
          1.0 2023 are formally announced
        </p>
      </VerticalTimelineElement>

      {/* Event 6 */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="November 18, 2023"
        contentStyle={{
          background: "#150e28",
          color: "#fff",
        }}
        iconStyle={{
          background: "linear-gradient(270deg, #903AFF 0%, #D434FE 100%)",
          color: "#fff",
        }}
        icon={<div className="timeline-circle">6</div>}
      >
        <h2 style={{ fontSize: "2rem", color: "#D434FE" }}>Demo Day</h2>
        <p style={{ fontSize: "1.3rem" }}>
          Teams get the opportunity to pitch their projects to judges. The
          winner of the hackathon will also be announced on this day
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default VerticalTime;
