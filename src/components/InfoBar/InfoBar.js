import React from "react";

export default function InfoBar({ room }) {
  return (
    <div className="infobar-container">
      <div className="left-container">
        <h2 className="room-name">{room}</h2>
      </div>
      <div className="right-container">
        <a href="/">
          <p>Leave Room</p>
        </a>
      </div>
    </div>
  );
}
