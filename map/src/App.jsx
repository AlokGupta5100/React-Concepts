import React from 'react'

const App = (props) => {
  return (
    <>
      <h3>Examples props</h3>
      <div>My name is taken thru props  {props.name}</div>
      <div>My age is taken thru props  {props.age}</div>
      <p>{props.isError ? 'isCorrectValue' : 'notCorrectValue'}</p>
      <div>
        <button onClick={props.onClick}>{props.label}</button>
      </div>
    </>
  )
}

export default App
