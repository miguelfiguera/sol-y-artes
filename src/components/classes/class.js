import React from "react";

export function Class({ modality, theClass }) {

    // modify this to use the same construction as
    // the img on the gallery
  return (
    
    <div className="col">
    <div className="card shadow">
      <img src={theClass.photo} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{theClass.course}</h5>
        <p className="card-text">{theClass.description}</p>
      </div>
    </div>
  </div>
    




)
}
