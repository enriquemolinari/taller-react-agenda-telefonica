import FilaContacto from "./FilaContacto.jsx";

export default function TablaDeContactos({ contactos }) {
  return (
    <section>
      <h1>Contactos</h1>
      <a class="btn btn-success mb-3">Agregar nuevo contacto</a>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Teléfonos</th>
          </tr>
        </thead>
        <tbody>
          {contactos.map((contacto) => (
            <FilaContacto key={contacto.id} contacto={contacto} />
          ))}
        </tbody>
      </table>
    </section>
  );
}
