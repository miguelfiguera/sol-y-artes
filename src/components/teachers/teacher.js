import React from "react";

export function Teacher({ object }) {
  const darkOrange = "#c2410c";

  return object.resume === "" ? (
    <div />
  ) : (
    <div class="card mb-3 border rounded-3 shadow">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src={object.photo}
            class="img-fluid rounded-start"
            alt="Picture of the Teacher"
            stlye={{ maxWidth: "350px", maxHeigth: "350px" }}
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{object.name}</h5>
            <p class="card-text">{object.resume}</p>
            <p className="card-text">{object.resume2}</p>
            <div className="row align-items-start">
              {object.instagram === "" ? (
                <p />
              ) : (
                <h6 className="col text-reset text-dark">
                  Instagram:{" "}
                  <a href={object.instagram}>
                    <i
                      className="fa-brands fa-instagram fa-lg"
                      style={{ color: darkOrange }}
                    ></i>
                  </a>
                </h6>
              )}

              {object.youtube === "" ? (
                <p />
              ) : (
                <h6 className=" col text-reset text-dark">
                  Youtube:{" "}
                  <a href={object.youtube} className="text-reset text-dark">
                    <i
                      className="fa-brands fa-youtube fa-lg"
                      style={{ color: darkOrange }}
                    ></i>
                  </a>
                </h6>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
