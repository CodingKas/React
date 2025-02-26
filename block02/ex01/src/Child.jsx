import React from "react";

function Child(props) {
  return (
    <div>
      <p>Hello {props.name}, I am the child component!</p>
    </div>
  );
}

export default Child;
