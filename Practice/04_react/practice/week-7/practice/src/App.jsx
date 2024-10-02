
import './App.css'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'

function App() {

  return (
    <>  

    <div>
      <nav>
        <ul>
          {/* <li><a href="/test1">Test1</a></li>
          <li><a href="/test2">Test2</a></li> */}
          {/* above will cause whole page to reload while routing and thats what we dont want cause it will send a different html and js file where its not done in single page applications */}

          {/* using window.location.href */}
          {/* <li><a onClick={() => window.location.href = '/test1'}>Test1</a></li>
          <li><a onClick={() => window.location.href = '/test2'}>Test2</a></li> */}
          {/* above will cause whole page to reload while routing and thats what we dont want cause it will send a different html and js file where its not done in single page applications */}

          {/* using useNavigate hook: the rule is it should be used onlyinside browser router or components called inside browser router so we will use it in appbar component called in it */}
        </ul>
      </nav>
    </div>

    <BrowserRouter>
      <Appbar />
      <Routes>
        <Route path="/test1" element={<Test1 />} />
        <Route path="/test2" element={<Test2 />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

function Appbar(){

  const navigate=useNavigate();

  return (
    <div>
      <nav>
        <ul>
          <li>
            <button
            onClick={()=>{
              navigate("/test1")
            }}>
              Test1
            </button>
          </li>
          <li>
            <button
            onClick={()=>{
              navigate("/test2")
            }}>
              Test2
            </button>
            </li>
        </ul>
      </nav>
    </div>
  )
}

function Test1(){
  return <div>Test1</div>
}
function Test2(){
  return <div>Test2</div>
}


export default App
