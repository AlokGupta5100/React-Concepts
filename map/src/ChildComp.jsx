import React from 'react'

const ChildComp = (props) => {
  return (
    <div>
    {props.header}
    <div>{props.children}</div>
  </div>
  )
}

export default ChildComp
