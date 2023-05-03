import logo from "../graphic_resources/Logo_y_Profesores/Solyartes sin lema.png";
import { Navbar } from "./navbar";

export function Header() {

  const lightPurple='#581c87'

  const darkPurple='#3b0764'


  return (
    <div className="page-header mb-0 pb-3" style={{backgroundColor:lightPurple}} >
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
