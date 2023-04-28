import logo from "../graphic_resources/Solyartes_con_lema.png";


export function Header() {

  return (
    <div className="page-header  " >
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
