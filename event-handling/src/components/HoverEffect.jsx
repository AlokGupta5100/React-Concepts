import React, { useState } from "react";

function HoverEffect() {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ backgroundColor: hover ? "grey" : "brown" }}
    >
      <h2>Hover over me</h2>
    </div>
  );
}
export default HoverEffect;
