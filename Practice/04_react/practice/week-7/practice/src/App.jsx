/* eslint-disable no-unused-vars */
import './App.css'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import React,{Suspense} from 'react';
import Entry from './components/Context api/Entry';
const LazyLoading1 = React.lazy(() => import('./components/routing/LazyLoading1'));
const LazyLoading2 = React.lazy(() => import('./components/routing/LazyLoading2'));
const LazyLoading3 = React.lazy(() => import('./components/routing/LazyLoading3'));
const LazyLoading4 = React.lazy(() => import('./components/routing/LazyLoading4'));


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
      {/* While using lazy loaded components it is compulsory to wrap routes inside Suspense that helps giving a fallback component eample a loader gif till the lazy loaded component is fetched.*/}
      <Suspense fallback={<div>Loading...</div>} >
      <Routes>
        <Route path="/test1" element={<Test1 />} />
        <Route path="/test2" element={<Test2 />} />
        <Route path="/lazyloading1" element={<LazyLoading1 />} />
        <Route path="/lazyloading2" element={<LazyLoading2 />} />
        <Route path="/lazyloading3" element={<LazyLoading3 />} />
        <Route path="/lazyloading4" element={<LazyLoading4 />} />

        <Route path="/context" element={<Entry />}  />
      </Routes>
      </Suspense>
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
            <li>
              <button  
              onClick={()=>{
                navigate("/lazyloading1")
              }}
              >
                LazyLoading1
              </button>
            </li>
            <li>
              <button  
              onClick={()=>{
                navigate("/lazyloading2")
              }}
              >
                LazyLoading2
              </button>
            </li>
            <li>
              <button  
              onClick={()=>{
                navigate("/lazyloading3")
              }}
              >
                LazyLoading3
              </button>
            </li>
            <li>
              <button  
              onClick={()=>{
                navigate("/lazyloading4")
              }}
              >
                LazyLoading4
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
