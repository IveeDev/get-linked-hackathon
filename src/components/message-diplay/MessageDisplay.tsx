import React from "react";
import "./MessageDisplay.scss";

interface Props {
  message: string | null;
  //   isError: boolean;
}

const MessageDisplay = ({ message }: Props) => {
  //   const className = isError ? "auth-success" : "auth-err";

  return <p className="auth-success">{message}</p>;
};

export default MessageDisplay;
