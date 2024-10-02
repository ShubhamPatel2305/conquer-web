/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext, useState } from "react"
import { CountContext } from "./context";
import { Navigate } from "react-router-dom";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom } from "./store/atoms/count";


function App() {
  return (
    <div>
        <Count />
    </div>
  )
}

function Count() {
  console.log("re render");
  return <div>
    <RecoilRoot>
      <CountRenderer />
      <Buttons />
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

export default App
