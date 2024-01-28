import React, { useState } from "react";

const DynamicList = () => {
  const [store, setStore] = useState(["Item 1", "Item 2", "Item 3"]);

  const handleRemove = (index) => {
    const updateItems = [...store];
    updateItems.splice(index, 1);
    setStore(updateItems);
  };

  return (
    <ul>
        <h2>Remove Items from Array</h2>
      {store.map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={() => handleRemove(index)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};
export default DynamicList;