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
import UseMemo2 from './components/UseMemo2'
import UseMemo1 from './components/UseMemo1'
import UseCallbackNeed from './components/UseCallbackNeed'
import CustomHooks from './components/CustomHooks'
import { Assignment2 } from './components/usememoassignment/Assignment2'
import { Assignment1 } from './components/usememoassignment/Assignment1'
import { Assignment3 } from './components/usememoassignment/Assignment3'
import { Aassignment1 } from './components/useCallbackAssignment/Aassignment1'
import { Aassignment2 } from './components/useCallbackAssignment/Aassignment2'
import { Aaassignment1 } from './components/useRefAssignment/Aaasignment1'
import { Aaassignment2 } from './components/useRefAssignment/Aaasignment2'

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
          <Route path="/useMemo1" element={<UseMemo1 />} />
          <Route path="/useMemo2" element={<UseMemo2 />} />
          <Route path="/usecallbackneed" element={ <UseCallbackNeed /> } />
          <Route path="/customhooks" element={<CustomHooks />} />
          <Route path="/usememoassignment/as2" element={<Assignment2 />} />
          <Route path="/usememoassignment/as1" element={<Assignment1 />} />
          <Route path="/usememoassignment/as3" element={<Assignment3 />} />
          <Route path="/usecallbackassignment/as1" element={<Aassignment1 />} />
          <Route path="/usecallbackassignment/as2" element={<Aassignment2 />} />
          <Route path="/useRefassignment/as1" element={<Aaassignment1 />} />
          <Route path="/useRefassignment/as2" element={<Aaassignment2 />} />
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
