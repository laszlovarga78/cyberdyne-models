import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        borderTop: "2px dashed #fff",
        borderBottom: "2px dashed #fff",
        height: "350px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
