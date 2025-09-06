export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Agenda Telefónica
        </a>
        <button
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          class="navbar-toggler"
          data-bs-target="#navbarNav"
          data-bs-toggle="collapse"
          type="button"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Listar Contactos
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Agregar Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
