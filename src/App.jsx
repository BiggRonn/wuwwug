import Header from "./components/header/Header"
import Menu from "./components/menu/Menu"
import './App.scss';
import { useState } from "react";


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="App">
      <Header menuOpen= {menuOpen} setMenuOpen= {setMenuOpen}/>
      <Menu menuOpen= {menuOpen} setMenuOpen= {setMenuOpen}/>

      
    </div>
  );
}

export default App;
