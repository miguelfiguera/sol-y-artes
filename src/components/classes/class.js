import React from "react";

export function Class({ modality, theClass, openModal }) {
  return (
    <div
      className="card shadow ms-3 me-3 mt-3 mb-3"
      style={{ maxWidth: "500px" }}
    >
      <img
        src={theClass.photo}
        style={{ maxWidth: "500px", maxHeight: "500px" }}
        className="card-img-top"
        alt={`${theClass.course}`}
      />
      <div className="card-body">
        <h5 className="card-title">{theClass.course}</h5>
        <p className="card-text">{theClass.description}</p>
      </div>
    </div>
  );
}
