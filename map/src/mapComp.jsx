import React from 'react';

function Mapfn(){
  const num = [1,2,3,4,5]
  const multiNum = num.map(number=>number*2)

  return(
    <ul>
      <h3>Exampl 1</h3>
    {multiNum.map((number,index) => (
      <li key={index}>{number}</li>
    ))}
    </ul>
  )
};
export default Mapfn;
