import React from 'react'
import ChildComp from './ChildComp'

const ParentComp = () => {
  return (
    <ChildComp header={<h2>Card Title</h2>}>
    <p>This is the card content.</p>
  </ChildComp>
  )
}

export default ParentComp
