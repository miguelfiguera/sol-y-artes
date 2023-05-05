import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { Navbar } from "./components/navbar";
import { Home } from "./components/home";
import { Galery } from "./components/galery";
import { Contact } from "./components/contact";
import { About } from "./components/about";
import { Footer } from "./components/footer";
import {useState} from 'react'
import {Teachers} from "./components/teachers/teachers";



function App() {
  const [modal,setModal] = useState(false);


  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar open={()=>setModal(true)} />
        <Routes>
          <Route exact path="/sol-y-artes/"  Component={Home} />
          <Route exact path="/sol-y-artes/about"  Component={About} />
          <Route exact path="/sol-y-artes/galery"  Component={Galery} />
          <Route exact path="/sol-y-artes/teachers" Component={Teachers}/>
        </Routes>
        <Contact open={modal} closeModal={()=>setModal(false)}/>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
