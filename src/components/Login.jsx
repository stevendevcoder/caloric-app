import React from "react";
import "../css/login.css";
export default function Login() {
  function changeLogin(e) {
    e.preventDefault();
    if (!e.target.classList.contains("focus")) {
      e.target.classList.add("focus");
      if (e.target.nextElementSibling) {
        e.target.nextElementSibling.classList.remove("focus");
      } else {
        e.target.previousElementSibling.classList.remove("focus");
      }
    }

    console.log(e.target.nextElementSibling);
  }
  return (
    <div className="container">
      <div className="login">
        <div className="opciones-registro">
          <a href="#" className="login-text" onClick={changeLogin}>
            Iniciar sesion
          </a>
          <a href="# " className="focus register" onClick={changeLogin}>
            Registrarse
          </a>
        </div>
        <form className="campos" action="POST">
          <label htmlFor="">Usuario</label>
          <input type="text" />
          <label htmlFor="">Correo</label>
          <input type="text" />
          <label htmlFor="">Contraseña</label>
          <input type="text" />
          <label htmlFor="">Repetir contraseña</label>
          <input type="text" />
        </form>
        <div className="text-register">
          <button>Registrarse</button>
          <p className="register">O Registrate con</p>
        </div>
        <div className="register-external">
          <button>Google</button>
          <button>Facebook</button>
        </div>
      </div>
    </div>
  );
}
