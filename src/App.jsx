import { useState } from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element = <Login/>/>
        <Route path='/signup' element =<Signup/>/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
