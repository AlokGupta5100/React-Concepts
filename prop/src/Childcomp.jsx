import React from "react";

function Child(props) {
  return (
    <>
      <h3>This is child component</h3>
      <p>Child Name : {props.name}</p>
      <p>Child Age : {props.age}</p>
      <p>Dynamic change : { props.age <= 20 ? "Lesser age" : "More than given age" }</p>
    </>
  );
}
export default Child;
