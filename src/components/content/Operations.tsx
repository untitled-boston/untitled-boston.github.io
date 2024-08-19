import React from "react";
import "../../assets/css/Operations.css";

export const Operations = () => {
  return (
    <div className="operations-container">
      <div className="operations-cards">
        <div className="operations-point">
          <p>
            Struggling with <strong>connecting</strong> with Boston’s{" "}
            <strong>largest</strong> demographic?
          </p>
        </div>
        <div className="operations-point">
          <p>
            Failing to make your brand <strong>memorable</strong>?
          </p>
        </div>
      </div>
      <div className="operations-point">
        <p>
          We provide <strong>comprehensive consultation</strong> for any
          experience, removing
          <strong> barriers</strong> to entering the contemporary Boston scene.
        </p>
      </div>

      <div className="operations-point">
        <p>
          We aim to make underground art, fashion, and music,{" "}
          <strong>safe</strong> and <strong>accessible</strong> to everyone.
        </p>
      </div>
    </div>
  );
};

export default Operations;
