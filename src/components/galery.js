import React from "react";
import { Img } from "./imgs";
import uniqid from "uniqid";

export function Galery() {
  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(
    require.context(
      "../graphic_resources/Galeria_estudiantes",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  return (
    <div className="container">
      <div className="container d-flex p-2 flex-wrap justify-content-center">
        {images.map((e) => {
          return <Img obj={e} key={uniqid()} />;
        })}
      </div>

      {
        //espacio para videos con estudiantes, de estudiantes o del profesor
      }

      <div
        id="carouselExampleCaptions"
        className="carousel slide text-center pt-5 pb-5 mt-0 mb-0"
        data-bs-ride="false"
        style={{ backgroundColor: "black" }}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">

          <div className="carousel-item active">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/vMzu9nmi-VU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="carousel-item">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/XzQyRyld6YU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="carousel-item">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/C8WNkHWVE5g"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>{" "}
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
