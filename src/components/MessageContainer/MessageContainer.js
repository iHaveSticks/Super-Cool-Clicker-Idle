import "./MessageContainer.css";
import React from 'react';

export default function MessageContainer() {

  return (
    <div id="messageBoxContainer"
      onClick={(event) => {
        if (event.target.className == "messageBox") {
          event.target.remove();
        }

      }}
    />
  )
}