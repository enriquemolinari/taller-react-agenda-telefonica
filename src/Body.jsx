import FormNuevoContacto from "./FormNuevoContacto.jsx";
import TablaDeContactos from "./TablaDeContactos.jsx";

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

export default function Body() {
  return (
    <main>
      <div class="container">
        <FormNuevoContacto />
        <TablaDeContactos contactos={CONTACTOS} />
      </div>
    </main>
  );
}
