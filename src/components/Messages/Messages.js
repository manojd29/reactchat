import React from "react";
import Message from "../Message/Message";
import ScrollToBottom from "react-scroll-to-bottom";
import ScrollableFeed from "react-scrollable-feed";

const Messages = ({ messages, name }) => {
  const pageStyle = {
    padding: "5% 0",
    width: "100%",
    height: "700px",
    maxWidth: "100%",
    maxHeight: "700px",
    overflow: "auto",
    flex: "auto",
  };
  return (
    <div style={pageStyle}>
      <ScrollableFeed>
        {messages.map((message, index) => (
          <div key={index}>
            <Message message={message} name={name} />
          </div>
        ))}
      </ScrollableFeed>
    </div>
  );
};
export default Messages;
