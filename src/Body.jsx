import FormNuevoContacto from "./FormNuevoContacto.jsx";
import TablaDeContactos from "./TablaDeContactos.jsx";
import { VISTA_LISTAR, VISTA_ALTA } from "./menuitems";

export default function Body({ menuItem, onSetMenuItem }) {
  return (
    <main>
      <div className="container">
        {menuItem === VISTA_ALTA ? (
          <FormNuevoContacto />
        ) : (
          <TablaDeContactos onAgregarClick={() => onSetMenuItem(VISTA_ALTA)} />
        )}
      </div>
    </main>
  );
}
