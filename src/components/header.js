import logo from "../graphic_resources/Logo_y_Profesores/Solyartes sin lema.png";
import { Navbar } from "./navbar";

export function Header() {


  const darkPurple='#3b0764'

  const styling={
    background: 'rgb(54,8,91)',
background: 'linear-gradient(45deg, rgba(54,8,91,1) 50%, rgba(88,28,135,1) 90%)'
  }

  return (
    <div className="page-header mb-0 pb-3" style={styling} >
      <div className="text-center">
        <img
          src={logo}
          className="sol-y-artes-logo "
          alt="Sol y Artes Logo"
        ></img>
      </div>
    </div>
  );
}
