/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Test from './components/test'
import ReduceReRenderUsingMemo from './components/ReduceReRenderUsingMemo'
import Todo from './components/Todo'

var globalCounter=4;

function App() {

  const [todos, settodos]=useState([{
    id:1,
    description:"Learn React",
  },
  {
    id:2,
    description:"Learn Node",
  },
  {
    id:3,
    description:"Learn Mongo",
  } 
  ]);

  const handleClick = ()=>{
    // add an element : "new task" to todos array on each click
    settodos([...todos,{
      id:globalCounter++,
      description:"new task"
    }]);
  }
  return (
    <>
      <h1>React Basics</h1>
      <Test />
      <ReduceReRenderUsingMemo />
      {/* send all todos as props to Todo component one by one as the todo accepys only description of todo it has to render */}
      {todos.map((todo)=>(
        // eslint-disable-next-line react/jsx-key
        <Todo  key={todo.id} description={todo.description} />
      ))}
      <button onClick={handleClick} style={{border:"1px solid black",width:"200px",height:"50px"}}>Add a new todo</button>
    </>
  )
}

export default App
