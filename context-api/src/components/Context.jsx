import React, { createContext, useContext } from "react";

const MyCont = createContext("delhi");

function ParentComp() {
  return (
    <MyCont.Provider value="noida">
      <ChildComp />
    </MyCont.Provider>
  );
}

function ChildComp() {
  const SomeVar = useContext(MyCont);

  return <h2>{SomeVar}</h2>;
}

export default ParentComp;
