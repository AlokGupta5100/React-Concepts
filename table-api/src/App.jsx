import {React,useEffect, useState} from 'react'
// import "./App.css";

const App = () => {
  const [data, setData] = useState([  ]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(result => {setData(result)})
  },[])
  return (  
    <div>
      <h1>React table</h1>
      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item,index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.address.suite}</td>
          </tr>
         ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
