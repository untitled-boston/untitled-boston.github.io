import React, { useState } from "react";
import "../../assets/css/Operations.css";

export const Operations = () => {
  return (
    <div className="operations-container">
      <div className="operations-content">
        <div className="operations-point">
          <p>
            Untitled operates with a <strong>dual-mode model</strong> designed
            for scalability.
          </p>
        </div>
        <div className="operations-split">
          <div className="operations-half">
            <p>
              <strong>We Come to You</strong>:<br />
              Partnering with businesses & venues to{" "}
              <strong>increase foot traffic</strong> and{" "}
              <strong>brand visibility</strong>.
            </p>
          </div>
          <div className="operations-half">
            <p>
              <strong>You Come to Us</strong>:<br />
              Providing a <strong>creative space</strong> to strengthen the{" "}
              <strong>arts</strong>, <strong>fashion</strong>, and{" "}
              <strong>music</strong> community of Boston.
            </p>
          </div>
        </div>
        <div className="operations-cards">
          <div className="operations-point">
            <p>
              <strong>Strategic Partnerships</strong>:<br />
              Collaborating with local startups to <strong>
                expand reach
              </strong>{" "}
              and drive <strong>success</strong>.
            </p>
          </div>
          <div className="operations-point">
            <p>
              <strong>Vision</strong>:<br />
              Aspiring to create a <strong>cultural movement</strong> that{" "}
              <strong>surpasses</strong> establishments like Boiler Room,
              Insomniac, or Mischief.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Operations;
