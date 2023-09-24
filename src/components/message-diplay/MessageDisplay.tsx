import React from "react";
import "./MessageDisplay.scss";

interface Props {
  message: string | null;
}

const MessageDisplay = ({ message }: Props) => {
  return <p className="auth-success">{message}</p>;
};

export default MessageDisplay;
