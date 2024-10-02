/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext, useState } from "react"
import { CountContext } from "./context";
import { Navigate } from "react-router-dom";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { countAtom } from "./store/atoms/count";


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
  const [count, setCount] = useRecoilState(countAtom);
  return <div>
    <button onClick={() => {
      setCount(count+1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count-1);
    }}>Decrease</button>
  </div>
}

export default App
