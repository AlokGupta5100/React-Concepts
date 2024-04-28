import React, { useEffect,useState } from 'react';

function Api() {
    const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    response.json().then((result) => {
        setData(result);
    })
  })
  })
  return (
    <>
      <h3>Fetch API</h3>
      <div><ul>{
        data.map(pst => {
            return(
                <>
                <li key={index}>{pst.id}</li>  
                <li>{pst.title}</li>
                </>
            )
        })
        }</ul></div>
    </>
  );
}

export default Api;