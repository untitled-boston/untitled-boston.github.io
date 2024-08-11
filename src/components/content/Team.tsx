import "../../assets/css/Team.css";
import CharacterSelect from "../CharacterSelect";

export const Team = () => {
  return (
    <div className="team-container">
      <div className="team-title">
        <h1>Meet the Team</h1>
      </div>
      <div className="team-content">
        <div className="team-point intro-point">
          <p>
            Our <strong>diverse</strong> executive team blends{" "}
            <strong>Fortune 500</strong> experience with the{" "}
            <strong>deep cultural history </strong>of Boston to deliver truly
            unique and <strong>authentic cultural experiences</strong>.
          </p>
        </div>
        <CharacterSelect />
        <div className="team-point">
          <p>
            We collaborate with startup event companies in Boston, such as{" "}
            <strong>Stamina Boston</strong>, and fashion groups like{" "}
            <strong>Northeastern Fashion Society</strong> and{" "}
            <strong>Select Markets</strong>, expanding our reach and
            contributing to the success of our events.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
