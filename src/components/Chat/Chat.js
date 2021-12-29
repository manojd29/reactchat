import Messages from "../Messages/Messages";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import React, { useState, useEffect } from "react";
import io from "socket.io-client";

let socket;

export default function Chat({ name, room, photoURL }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const ENDPOINT = "http://localhost:4000";
  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("join", { name, room, photoURL }, () => {});

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, ENDPOINT);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };
  console.log(message, messages);
  return (
    <div>
      <InfoBar room={room} />
      <Messages messages={messages} name={name} photoURL={photoURL} />
      <Input
        setMessage={setMessage}
        sendMessage={sendMessage}
        message={message}
      />
    </div>
  );
}
