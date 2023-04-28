import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { Navbar } from "./components/navbar";
import { Home } from "./components/home";
import { Galery } from "./components/galery";
import { Contact } from "./components/contact";
import { About } from "./components/about";
import { Footer } from "./components/footer";
import Modal from 'react-modal'
import {useState,useEffect} from 'react'




function App() {
  const [modal,setModal] = useState(false);


  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar open={()=>setModal(true)} />
        <Routes>
          <Route exact path="/"  Component={Home} />
          <Route exact path="/about"  Component={About} />
          <Route exact path="/galery"  Component={Galery} />
        </Routes>
        <Contact open={modal} closeModal={()=>setModal(false)}/>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
