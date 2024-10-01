/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Test from './components/test'
import ReduceReRenderUsingMemo from './components/ReduceReRenderUsingMemo'
import Todo from './components/Todo'
import DumbWrapperComponents from './components/DumbWrapperComponents'
import SmartWrapperComponents from './components/SmartWrapperComponents'
import UseEffectDemo from './components/UseEffectDemo'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Import the Hooks component
import Hooks from './components/Hooks';
import UseEffect2 from './components/useEffect2'
import UseEffect3 from './components/UseEffect3'
import UseCallback from './components/UseCallback'
import UseMemo2 from './components/UseMemo2'

var globalCounter = 4;

function App() {
  const [todos, settodos] = useState([
    {
      id: 1,
      description: "Learn React",
    },
    {
      id: 2,
      description: "Learn Node",
    },
    {
      id: 3,
      description: "Learn Mongo",
    }
  ]);

  const handleClick = () => {
    // add an element : "new task" to todos array on each click
    settodos([...todos, {
      id: globalCounter++,
      description: "new task"
    }]);
  }

  return (
    <Router>
      <>
        <h1>React Basics</h1>

        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/hooks">Hooks</Link></li>
          </ul>
        </nav>

        <Routes>
          {/* Other routes */}
          <Route path="/" element={
            <>
              <Test />

              <ReduceReRenderUsingMemo />

              {todos.map((todo) => (
                <Todo key={todo.id} description={todo.description} />
              ))}
              <button onClick={handleClick} style={{ border: "1px solid black", width: "200px", height: "50px" }}>Add a new todo</button>

              <hr />

              <DumbWrapperComponents child={<WrappedComponent />} />
              <DumbWrapperComponents child={<WrappedComponent />} />
              <DumbWrapperComponents child={<WrappedComponent />} />

              <hr />

              <SmartWrapperComponents>
                <div>Hey there</div>
                <WrappedComponent />
              </SmartWrapperComponents>

              <SmartWrapperComponents>
                <SmartWrapperComponents>
                  <WrappedComponent />
                </SmartWrapperComponents>
              </SmartWrapperComponents>

              <hr />
              <UseEffectDemo />
            </>
          } />

          {/* New route for the Hooks component */}
          <Route path="/hooks" element={<Hooks />} />
          <Route path="/useeffect2" element={<UseEffect2 />} />
          <Route path='/useeffect3' element={<UseEffect3 />} />
          <Route path="/usecallback1" element={<UseCallback />} />
          <Route path="/useMemo2" element={<UseMemo2 />} />
        </Routes>
      </>
    </Router>
  )
}

function WrappedComponent() {
  return (
    <div>Hello world</div>
  )
}

export default App;
