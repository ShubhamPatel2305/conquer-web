/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext, useState } from "react"
import { CountContext } from "./context";
import { Navigate } from "react-router-dom";


function App() {
  return (
    <div>
      <CountContext.Provider>
        <Count />
      </CountContext.Provider>
    </div>
  )
}

function Count() {
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer() {
  return <div>

  </div>
}

function Buttons() {
  return <div>
    <button onClick={() => {

    }}>Increase</button>

    <button onClick={() => {
      
    }}>Decrease</button>
  </div>
}

export default App
