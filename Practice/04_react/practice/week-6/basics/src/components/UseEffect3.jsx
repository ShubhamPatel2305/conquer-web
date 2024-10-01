/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const UseEffect3 = () => {
    const [ids,setids]=useState(1);
  return (
    <div>
        <button onClick={()=>{
            setids(2)
        }}>1</button>
        <button onClick={()=>{
            setids(3)
        }}>2</button>
        

        <Disp id={ids} />
    </div>
  )
}

const Disp=({id})=>{

    const [todos,settodos]=useState({});

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`).then(
            (res)=>{
                console.log(res);
                settodos(res.data);
            }
        )
    },[id])

    return(
        <div>
            <h1>{todos.title}</h1>
            <p>{todos.description}</p>
        </div>
    )
}

export default UseEffect3