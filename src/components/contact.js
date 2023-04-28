import React from "react";

export function Contact(){



    return(
    
    <div className="modal" tabIndex="-1">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Modal title</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <ul>
            <li>Telf: +58 424-2341510</li>
            <li>Telf:</li>
            <li>Correo: solyartes@hotmail.com </li>
            <li>Instagram:<a href="https://www.instagram.com/escuela.solyartes/">@escuela.solyartes</a>
            <i className="fa-brands fa-instagram"></i> </li>
            <li>Whatsapp: <a href="https://www.instagram.com/escuela.solyartes/">
            <i className="fa-brands fa-instagram"></i></a></li>
          </ul>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  
  )
}