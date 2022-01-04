import React from "react";
import { Container, Button } from "react-bootstrap";
import "./InfoBar.css";

export default function InfoBar({ room }) {
  return (
    <Container className="infobar-container">
      <div className="left-container">
        <h1 className="room-name">{room}</h1>
      </div>
      <div className="right-container">
        <a href="/home">
          <Button className="leave-btn">Leave Room</Button>
        </a>
      </div>
    </Container>
  );
}
