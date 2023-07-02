import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { Navbar } from "./components/navbar";
import { Home } from "./components/home";
import { Galery } from "./components/galery";
import { Contact } from "./components/contact";
import { About } from "./components/about";
import { Footer } from "./components/footer";
import { useState } from "react";
import { Teachers } from "./components/teachers/teachers";
import { Classes } from "./components/classes/classes";
import Canto from "./components/classes/Canto";
import Instrumentos from "./components/classes/Instrumentos";
import Ensambles from "./components/classes/Ensambles";
import IniciacionMusical from "./components/classes/IniciacionMusical";
import PreyPostnatal from "./components/classes/PreyPostnatal";
import TeoriaYArmonia from "./components/classes/TeoriaYArmonia";
import Conciertos from "./components/classes/Conciertos";

function App() {
  const [modal, setModal] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar open={() => setModal(true)} />
        <Routes>
          <Route exact path="/sol-y-artes/" Component={Home} />
          <Route exact path="/sol-y-artes/about" Component={About} />
          <Route exact path="/sol-y-artes/galery" Component={Galery} />
          <Route exact path="/sol-y-artes/teachers" Component={Teachers} />
          <Route exact path="/sol-y-artes/clases" Component={Classes} />
          <Route exact path="/sol-y-artes/clases/canto" Component={Canto}/>
          <Route exact path="/sol-y-artes/clases/conciertos" Component={Conciertos}/>
          <Route exact path="/sol-y-artes/clases/ensambles" Component={Ensambles}/>
          <Route exact path="/sol-y-artes/clases/iniciacion-musical" Component={IniciacionMusical}/>
          <Route exact path="/sol-y-artes/clases/instrumentos" Component={Instrumentos}/>
          <Route exact path="/sol-y-artes/clases/pre-y-postnatal" Component={PreyPostnatal}/>
          <Route exact path="/sol-y-artes/clases/teoria-y-armonia" Component={TeoriaYArmonia}/>
        </Routes>
        <Contact open={modal} closeModal={() => setModal(false)} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
