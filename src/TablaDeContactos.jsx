import FilaContacto from "./FilaContacto.jsx";

export default function TablaDeContactos({ contactos, onAgregarClick }) {
  return (
    <section>
      <h1>Contactos</h1>
      <a
        className="btn btn-success mb-3"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          onAgregarClick && onAgregarClick();
        }}
      >
        Agregar nuevo contacto
      </a>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Teléfonos</th>
          </tr>
        </thead>
        <tbody>
          {contactos.map((contacto) => (
            <FilaContacto
              key={contacto.contactoId || contacto.id}
              contacto={contacto}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}
