import Signup from './components/Signup';
import Login from './components/Login';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Readblog from './components/Readblog';
import Createblog from './components/Createblog';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = <Home/>/>
        <Route path='/login' element = <Login/>/>
        <Route path='/signup' element =<Signup/>/>
        <Route path='/readblog' element =<Readblog/>/>
        <Route path='/createblog' element =<Createblog/>/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
