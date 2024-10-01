/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react'

const UseEffectDemo = () => {

    const [res, setres]=useState({msg:"No response"});
    //define usestate for title and description of todos 
    const [title, settitle]=useState("Hey");
    const [description, setdescription]=useState("Hey");

    const [counter,setcounter]=useState(0);

    useEffect(() => {
        setInterval(()=>{
            fetch("http://localhost:3000/user/getalltodos").then(async (res)=>{
                const data = await res.json();
                setres(data);
                console.log("fetch");
            }).catch((err)=>{
                setres(err);
            })
        },10000)
    },[]);

    useEffect(()=>{
        alert(counter);
    },[counter]);

    function handleClick(){
        setcounter(counter+1);
    }
  return (
    <div>
        <h1>UseEffect Demo</h1>
        <h2>{typeof res === 'object' ? JSON.stringify(res) : res}</h2>

        <button onClick={handleClick}>Increment counter</button>
        <p>{counter}</p>
    </div>
  ) 
}

export default UseEffectDemo