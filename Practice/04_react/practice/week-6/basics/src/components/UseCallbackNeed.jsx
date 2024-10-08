/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { memo, useCallback, useState } from 'react'

const UseCallbackNeed = () => {
    const [counter,setcounter]=useState(0);

    var a=1;
    var b=()=>{
        console.log("Function")
        return (<><div>Inside function</div></>)
    }

    var c=useCallback(()=>{
        console.log("Use Callback Function")
        return (<><div>Inside function</div></>)
    },[])
  return (
    <div>UseCallbackNeed
        <button onClick={()=>{
            setcounter(counter+1)
        }}>{counter}</button>
        <h1>Variable props:</h1>
        <VariableProps a={a}/>
        <h1>Function props:</h1>
        <FunctionProps a={b}/>
        <h1>UseCallback props:</h1>
        <UseCallbackProp a={c} />
    </div>
  )
}

const FunctionProps=memo(function FunctionProps ({a}){
    console.log("function prop component rerendered")
    return <div>{a}</div>
});

const VariableProps=memo(function VariableProps({a}){
    console.log("variable prop component rerendered")
    return <div>{a}</div>
})

const UseCallbackProp=memo(function UseCallbackProps({a}){
    console.log("usecallback prop component rerendered")
    return <div>{a}</div>
})
export default UseCallbackNeed