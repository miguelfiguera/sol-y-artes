import React from "react";
import { theTeachers } from "../helpers";
import { Teacher } from "./teacher";

export function Teachers() {
  const darkOrange = "#c2410c";

  return (
    <div className="container">
      <h2 className="text-center" style={{ color: darkOrange }}>
        {" "}
        Nuestros Profesores
      </h2>

      <div className="container">
        {theTeachers().map((t) => {
          return <Teacher object={t} key={t.id} />;
        })}
      </div>
    </div>
  );
}
