/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext, useState } from "react"
import { CountContext } from "./context";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom } from "./store/atoms/count";
import { isEvenOdd } from "./store/atoms/isEvenOdd";
import TodoFilter from "./components/TodoFilter";


function App() {
  return (
    <div>
      <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Count />} /> 
          <Route path="/todofilter" element={<TodoFilter />} /> 
        </Routes>
      </BrowserRouter>
      </RecoilRoot>
    </div>
  )
}

function Count() {
  console.log("re render");
  return <div>
    <RecoilRoot>
      <CountRenderer />
      <Buttons />
      <Test />
    </RecoilRoot>
  </div>
}

function CountRenderer() {
  const count= useRecoilValue(countAtom);

  return <div>
    <h1>{count}</h1>
  </div>
}

function Buttons() {
  console.log("buttons re render")

  const setCount=useSetRecoilState(countAtom);
  return <div>
    <button onClick={() => {
      setCount(count=>count+1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count=>count-1);
    }}>Decrease</button>
  </div>
}

function Test(){
  console.log("test");
  const evenOdd=useRecoilValue(isEvenOdd);

  return <div>{evenOdd}</div>
}

export default App
