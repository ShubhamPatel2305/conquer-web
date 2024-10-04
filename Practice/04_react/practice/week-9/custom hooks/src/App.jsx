
import './App.css'
import SelfRefreshingDataFetch from './components/SelfRefreshingDataFetch'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/auto-fetch" element={<SelfRefreshingDataFetch />} />
      </Routes>
    </BrowserRouter>
    Hey
    </>
  )
}

export default App
