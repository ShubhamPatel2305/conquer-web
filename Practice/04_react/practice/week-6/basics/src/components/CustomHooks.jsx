/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CustomHooks = () => {

    //this code is taken from Useeffect2 component andmodified to reduce the amount to content of use state and useEffect in our main functionthat gets returned and define custom hooks that must start with use... for better code readability and clean code.

    const todos=useTodos();

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

function useTodos(){
    const [todos,settodos]=useState([]);

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then(
            (res)=>{
                console.log(res);
                settodos(res.data);
            }
        )
    },[]);
    return todos;
}

export default CustomHooks