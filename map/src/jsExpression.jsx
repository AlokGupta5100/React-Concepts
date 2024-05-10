import React from 'react'

const MapComp2 = () => {
    const name = "This is javaScript expressions inside curly braces {} with variable ";

function delhi(){
    return 9*9
};

  return (
    <div>
      <h3>Example 2</h3>
      <div>Hello! {name}</div>
      <div>an expression is embedded inside the JSX = Square of {5*4}</div>
      <div>print {delhi()}</div>
    </div>
  )
}

export default MapComp2;
