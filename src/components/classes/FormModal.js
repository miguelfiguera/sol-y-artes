import React from "react";
import ReactDom from "react-dom";
import { useForm, ValidationError } from "@formspree/react";

export function FormModal({ open, closeModal }) {
  const lightPurple = "#581c87";

  const [state, handleSubmit] = useForm("xnqywwnw");
  if (state.succeeded) {
    return <p>Gracias por escribir! Te responderemos pronto!</p>;
  }

  if (open === false) {
    return null;
  }

  const modalStyles = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "rgb(54,8,91)",
    background:
      "linear-gradient(45deg, rgba(54,8,91,1) 50%, rgba(88,28,135,1) 90%)",
    padding: "50px",
    zIndex: 1030,
    maxWidth: 600,
    maxHeight: 400,
  };

  const backdropStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, .8)",
    zIndex: 1030,
  };

  return ReactDom.createPortal(
    <div className="container">
      <div style={backdropStyles}>
        <form onSubmit={handleSubmit} style={modalStyles} className="rounded-3">
          <div className="mb-3">
            <label for="full-name" className="form-label text-light">
              Nombre y apellido:
            </label>
            <input
              type="text"
              name="name"
              id="full-name"
              placeholder="Nombre completo"
              required="true"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-light">
              Dirección de correo:
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="form-control"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label text-light">
              Mensaje:
            </label>
            <textarea id="message" name="message" className="form-control" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <div class="modal-footer">
            <button
              type="submit"
              disabled={state.submitting}
              className="btn btn-secondary mt-2 me-3"
              style={{ backgroundColor: lightPurple }}
            >
              Enviar
            </button>
            <button
              type="button"
              className="btn btn-danger mt-2 ms-5"
              onClick={closeModal}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
