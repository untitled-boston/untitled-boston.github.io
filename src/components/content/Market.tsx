import "../../assets/css/Market.css";

export const Market = () => {
  return (
    <div className="market-container">
      <div className="market-title">
        <h1>Boston Market Insights</h1>
      </div>
      <div className="market-content">
        <div className="market-point population-point">
          <p>
            With over <strong>250,000</strong> people, more than{" "}
            <strong>1 in 3</strong> Bostonians are between the ages of{" "}
            <strong>18 & 34</strong>. These young working adults represent a{" "}
            <strong>lucrative</strong>, yet largely untapped market with{" "}
            <strong>significant</strong>
            {""} disposable income. Our recent social media survey revealed:
          </p>
        </div>
        <div className="market-cards">
          <div className="market-point">
            <p>
              <strong className="market-point-title">Event Attendance</strong>:
              <br />
              <strong>79%</strong> attend music, fashion, or art events{" "}
              <strong>frequently</strong>.
            </p>
          </div>
          <div className="market-point">
            <p>
              <strong className="market-point-title">
                Openness to New Experiences
              </strong>
              :<br /> <strong>73%</strong> are eager to visit{" "}
              <strong>new</strong> venues, showing a strong desire for unique
              and novel experiences.
            </p>
          </div>
          <div className="market-point">
            <p>
              <strong className="market-point-title">
                Social Media Engagement
              </strong>
              : <br />
              <strong>72%</strong> are highly likely to share their event
              experiences online, <strong>amplifying</strong> your brand’s
              reach.
            </p>
          </div>
          <div className="market-point">
            <p>
              <strong className="market-point-title">Brand Loyalty</strong>:
              <br />
              <strong>71%</strong> are likely to attend multiple events from the
              same organizers, ensuring repeated <strong>patronage</strong>.
            </p>
          </div>
          <div className="market-point">
            <p>
              <strong className="market-point-title">Financial Status</strong>:
              <br />
              Over <strong>81%</strong> have disposable income through
              employment or as students.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
