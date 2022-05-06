import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        borderTop: "1px dashed #000",
        borderBottom: "1px dashed #000",
        height: "500px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
