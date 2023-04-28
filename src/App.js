import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { Home } from "./components/home";
import { Galery } from "./components/galery";
import { Contact } from "./components/contact";
import { About } from "./components/about";
import { Footer } from "./components/footer";

function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/"  Component={Home} />
          <Route exact path="/about"  Component={About} />
          <Route exact path="/galery"  Component={Galery} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
