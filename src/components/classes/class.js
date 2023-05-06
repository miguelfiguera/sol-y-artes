import React from "react";

export function Class({ modality, theClass }) {
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
