/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const UseMemo1 = () => {
    const [ip,setip]=useState(1);
    const [data,setdata]=useState(0);

    let count=0;
    for(let i=1;i<=ip;i++){
        count+=i;
        console.log(i);
    }
  return (
    <div>UseCallback\
        <input type="number" onChange={(e)=>{
            setip(e.target.value);
        }} />
        <h1>{count}</h1>
        {/* here the for loop wil run even when button counter changes as a state variable changes */}
        <button onClick={()=>{
          setdata(data+1);
        }}>Counter {data}</button>
    </div>
  )
}

export default UseMemo1