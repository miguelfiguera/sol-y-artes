import { Navbar } from "./navbar";
import logo from "../graphic_resources/Solyartes_con_lema.png";
import {useState,useEffect} from 'react'


export function Header() {

    const [showModal,setShowModal] = useState(false)


  return (
    <div className="page-header  " id="header">
      <div className="text-center">
        <img
          src={logo}
          className="sol-y-artes-logo "
          alt="Sol y Artes Logo"
        ></img>
      </div>
      <Navbar />
    </div>
  );
}
