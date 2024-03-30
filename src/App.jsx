import Signup from "./components/Signup";
import Login from "./components/Login";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Readblog from "./components/Readblog";
import Createblog from "./components/Createblog";
import Layout from "./Layout/Layout";
import { Blogmain } from "./components/Blogmain";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element=<Login /> />
        <Route path="/signup" element=<Signup /> />
        <Route path="/" element=<Layout />>
          <Route index element=<Blogmain /> />
          <Route path="/readblog" element=<Readblog /> />
          <Route path="/createblog" element=<Createblog /> />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
