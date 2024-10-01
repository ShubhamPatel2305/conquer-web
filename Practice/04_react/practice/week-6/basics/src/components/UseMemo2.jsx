/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo, useState } from 'react'

const UseMemo2 = () => {
    const [ip,setip]=useState(1);
    const [data,setdata]=useState(0);

    let count=useMemo(()=>{
        let c=0;
        for(let i=1;i<=ip;i++){
            c+=i;
            console.log(i);
        }
        return c;
    },[ip]);

    // const [finalCount, setfinalCount]=useState(0);
    // useEffect(()=>{
    //     let c=0;
    //     for(let i=1;i<=ip;i++){
    //         c+=i;
    //         console.log(i);
    //     }
    //     setfinalCount(c);
    // },[ip])


    return (
        <div>UseMemo2 
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

export default UseMemo2