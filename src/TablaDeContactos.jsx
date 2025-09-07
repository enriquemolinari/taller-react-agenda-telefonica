import { useEffect, useState } from "react";
import FilaContacto from "./FilaContacto.jsx";

export default function TablaDeContactos({ onAgregarClick }) {
  const [contactos, setContactos] = useState([]);

  useEffect(() => {
    const obtenerContactos = async () => {
      const response = await fetch("http://localhost:8080/contactos?page=1");
      const data = await response.json();
      setContactos(data);
    };
    obtenerContactos();
  }, []);

  return (
    <section>
      <h1>Contactos</h1>
      <a
        className="btn btn-success mb-3"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          onAgregarClick();
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
