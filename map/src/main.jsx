import React from 'react'
import ReactDOM from 'react-dom/client'
import Mapfn from './mapComp.jsx'
import MapComp2 from './jsExpression.jsx'
import './index.css'
import App from './App.jsx'
import ParentComp from './ParentComp.jsx'
import ChildComp from './ChildComp.jsx'
import Api from './Api.jsx'

  function handleClick() {
    console.log("this is passing functional props"); 
  }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Mapfn/>
    <MapComp2/>
    <App name='Alok' age='25' isError={false} onClick={handleClick} label="Click me " />
    <ParentComp/>
    <ChildComp/>
    <Api/>
  </React.StrictMode>,
)