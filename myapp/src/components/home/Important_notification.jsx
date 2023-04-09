import React from "react";
import "../style/home.css";
function Important_notification() {
  return (
    <div className=" container-fluid notification">
      <marquee
        behavior="scroll"
        direction="left"
        scrollamount="6"
        className="marqueeTag"
      >
        <h3 style={{ color: "red", marginTop: "-5px" }}>
          Important Notification Important Notification Important Notification
        </h3>
      </marquee>
    </div>
  );
}

export default Important_notification;
