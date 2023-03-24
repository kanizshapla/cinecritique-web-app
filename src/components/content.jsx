import React from "react";

function Content(props) {
  return (
    <div className="content">
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  );
}

export default Content;
