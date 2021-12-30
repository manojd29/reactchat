import React, { useState, useEffect } from "react";
import socketClient from "socket.io-client";
import { Image, Form, Button, Card, FormControl } from "react-bootstrap";
import "./GlobalChat.css";
import ReactEmoji from "react-emoji";
import ScrollableFeed from "react-scrollable-feed";
import ScrollToBottom from "react-scroll-to-bottom";
import Chat from "../Chat/Chat";
let socket;

function GlobalChat({ user }) {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState();
  const [messages, setMessages] = useState([]);
  const [room, setRoom] = useState("");
  const [joined, setJoined] = useState(false);
  const ENDPOINT = `http://localhost:5000`;

  const joinRoom = (e) => {
    if (!room) {
      e.preventDefault();
    } else {
      setJoined(true);
    }
  };

  useEffect(() => {
    const { displayName, photoURL } = user;
    setName(displayName);
    setPhoto(photoURL);
    socket = socketClient(ENDPOINT);

    socket.on("connect", () => {
      console.log("Socket connected to the backend");
      socket.on("message", (message) => {
        receivedMessage(message);
      });
    });
  }, [ENDPOINT]);
  function receivedMessage(message) {
    setMessages((messages) => [...messages, message]);
  }
  var formSubmit = (event) => {
    event.preventDefault();
    const messageBody = {
      body: message,
      id: name,
      pic: photo,
    };
    setMessage("");
    socket.emit("send message", messageBody);
  };
  return joined ? (
    <>
      <Chat name={name} room={room} photoURL={photo} />
    </>
  ) : (
    <>
      <div id="outer-container">
        <div id="left-container">
          <Card id="join-card">
            <Form onSubmit={joinRoom}>
              <div xs={6} md={4} className="text-center">
                <Image src={photo} roundedCircle />
              </div>
              <center>
                <Card.Title>{name}</Card.Title>
              </center>
              <center>
                <FormControl
                  id="join-input"
                  placeholder="Enter Room Name to continue.."
                  style={{ textTransform: "lowercase" }}
                  onChange={(e) => setRoom(e.target.value)}
                />
                <Button id="join-btn" type="submit">
                  Join
                </Button>
              </center>
            </Form>
          </Card>
        </div>
        <div id="right-container">
          <div id="msg-container">
            <ScrollToBottom>
              {messages.map((message, index) => {
                if (message.id === name) {
                  return (
                    <div id="msg-sender">
                      <div id="msg-content" key={index}>
                        <div>
                          <Image width="25px" src={message.pic} roundedCircle />
                          {message.id}
                        </div>
                        <div id="">{ReactEmoji.emojify(message.body)}</div>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div id="msg-receiver">
                      <div id="other-content" key={index}>
                        <div>
                          <Image width="25px" src={message.pic} roundedCircle />
                          {message.id}
                        </div>
                        <div>{ReactEmoji.emojify(message.body)}</div>
                      </div>
                    </div>
                  );
                }
              })}
            </ScrollToBottom>
          </div>
          <form onSubmit={formSubmit} id="msg-form">
            <input
              placeholder="Type a message to send"
              id="msg-input"
              type="text"
              autoComplete="off"
              name="messageInput"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
            <Button
              id="msg-btn"
              type="submit"
              onClick={(e) => (!message ? e.preventDefault() : "null")}
            >
              SEND
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default GlobalChat;
