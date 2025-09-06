import { VISTA_LISTAR, VISTA_ALTA } from "./menuitems";

export default function Header({ onSetMenuItem, menuItem }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Agenda Telefónica
        </a>
        <button
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="navbar-toggler"
          data-bs-target="#navbarNav"
          data-bs-toggle="collapse"
          type="button"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className={`nav-link${
                  menuItem === VISTA_LISTAR ? " active" : ""
                }`}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onSetMenuItem(VISTA_LISTAR);
                }}
              >
                Listar Contactos
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link${
                  menuItem === VISTA_ALTA ? " active" : ""
                }`}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onSetMenuItem(VISTA_ALTA);
                }}
              >
                Agregar Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
