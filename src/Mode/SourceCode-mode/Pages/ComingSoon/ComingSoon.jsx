import React from "react";
import "./ComingSoon.css";
import image from "../../../../assets/animations/programmer.gif";

const ComingSoon = () => {
  return (
    <div className="container soon">
      <div className="wrapper">
        <div className="soon-content">
          <div className="soon-item">
            <h1 className="soon-title">COMING SOON</h1>
            <p className="soon-text">This feature is under construction.</p>
          </div>
        </div>
      </div>
      {/* <div className="not-found">
        <img src={image} alt="" />
      </div> */}
    </div>
  );
};

export default ComingSoon;
