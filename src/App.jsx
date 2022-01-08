import Header from "./components/header/Header"
import Menu from "./components/menu/Menu"
import Stash from "./pages/stash/Stash";
import Find from "./pages/find/Find";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import { Toaster } from "react-hot-toast";


import './App.scss';


import { useState } from "react";

// import {auth} from "./firebase/config"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  
  return (
   
    <BrowserRouter>
    <div><Toaster /></div>
    <Header menuOpen = {menuOpen} setMenuOpen = {setMenuOpen} />
    <Menu menuOpen = {menuOpen} setMenuOpen = {setMenuOpen} />
    <Routes>
      <Route path="/find" element={<Find/>} />
      <Route path="/" element={<Stash />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
  
   
     
  );
}

export default App;
