import React from "react";

const style = {
  color: "blue",
};

const Test = (props) => {
  return (
    <h3
      style={{
        color: "blueviolet",
      }}
    >
      {props.click}
    </h3>
  );
};

export default Test;
