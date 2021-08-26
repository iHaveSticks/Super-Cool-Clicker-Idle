import React from 'react';

export default function MessageContainer() {

  return (
    <aside id="messageBoxContainer"
      onClick={(event) => {
        if (event.target.className === "messageBox") {
          event.target.remove();
        }

      }}
    />
  )
}