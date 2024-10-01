/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const UseEffect2 = () => {

    const [todos,settodos]=useState([]);

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then(
            (res)=>{
                console.log(res);
                settodos(res.data);
            }
        )
    },[]);

  return (
    <div>
        {todos.map(todo=> <Todo key={todo.id} title={todo.title} desc={todo.description} />)}
    </div>
  )
}

function Todo({title, desc}){
    return(
        <div>
            <h1>{title}</h1>
            <p>{desc}</p>
        </div>
    )
}

export default UseEffect2