import React from "react";
import Child from "./Childcomp";

function Parent() {
  return (
    <>
      <h2><u>This is parent component</u></h2>
      <Child name="Alok" age={25} />
    </>
  );
}

export default Parent;