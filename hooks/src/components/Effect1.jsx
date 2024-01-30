import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Effect1 = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const   response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const result = await response.json();
                setData(result);
            }
            catch(error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchData();
    },[]);

  return (
    <div>
        <h1>Data Fetching</h1>
        <ul>
            {data.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default Effect1
