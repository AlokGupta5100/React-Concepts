import React, { useState } from "react";

function ToggleButton() {
  const [data, setData] = useState(true);

  const handleData = () => {
    setData(!data);
  };

  return (
    <>
      <p>Toggle State : {data ? "ON" : "FALSE"}</p>
      <button onClick={handleData}>Enter here</button>
    </>
  );
}
export default ToggleButton;