export default function FilaContacto({ contacto }) {
  return (
    <tr>
      <td>{contacto.nombre}</td>
      <td>
        <ul className="mb-0">
          {contacto.telefonos.map((tel, index) => (
            <li key={index}>{tel}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
}
