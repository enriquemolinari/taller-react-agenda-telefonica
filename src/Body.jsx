import FormNuevoContacto from "./FormNuevoContacto.jsx";
import TablaDeContactos from "./TablaDeContactos.jsx";
import { VISTA_LISTAR, VISTA_ALTA } from "./menuitems";

const CONTACTOS = [
  {
    contactoId: "1",
    nombre: "Jorge",
    telefonos: ["123-4567890", "123-8987890"],
  },
  {
    contactoId: "2",
    nombre: "Nicolás",
    telefonos: ["2345678901"],
  },
  {
    contactoId: "3",
    nombre: "María",
    telefonos: ["3452789012"],
  },
];

export default function Body({ menuItem, onSetMenuItem }) {
  return (
    <main>
      <div className="container">
        {menuItem === VISTA_ALTA ? (
          <FormNuevoContacto />
        ) : (
          <TablaDeContactos
            contactos={CONTACTOS}
            onAgregarClick={() => onSetMenuItem(VISTA_ALTA)}
          />
        )}
      </div>
    </main>
  );
}
