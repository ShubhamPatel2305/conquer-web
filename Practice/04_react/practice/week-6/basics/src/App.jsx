/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Test from './components/test'
import ReduceReRenderUsingMemo from './components/ReduceReRenderUsingMemo'

function App() {

  return (
    <>
      <h1>React Basics</h1>
      <Test />
      <ReduceReRenderUsingMemo />
    </>
  )
}

export default App
