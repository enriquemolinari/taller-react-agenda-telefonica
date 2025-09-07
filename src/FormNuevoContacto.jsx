import { useActionState } from "react";

async function submitForm(prevState, formData) {
  // This simulate an API call
  //await new Promise((resolve) => setTimeout(resolve, 2000));
  //return false;

  const response = await fetch("http://localhost:8080/contactos", {
    method: "POST",
    body: JSON.stringify({
      nombre: formData.get("nombre"),
      codigoArea: formData.get("codigoArea"),
      telefono: formData.get("telefono"),
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  let success = response.status === 200;
  if (!success) {
    const data = await response.json();
    return { success: success, body: data };
  }
  return { success: success };
}

export default function FormNuevoContacto() {
  //submitForm  es la función que se llama al submitear el formulario
  //state es lo que devuelve submitForm
  //formAction funcion implementada por React. Ejecuta submitForm y maneja el estado
  //isPending indica si la acción está en curso
  const [state, formAction, isPending] = useActionState(
    submitForm,
    null /* initial state */
  );

  return (
    <section>
      <h1>Alta de Contacto</h1>
      {state !== null && (
        <p
          className={
            state.success ? "alert alert-success" : "alert alert-danger"
          }
        >
          {state.success
            ? "Contacto creado exitosamente!"
            : "Error al crear contacto:" + state.body.message}
        </p>
      )}
      <form method="post" action={formAction}>
        <div className="mb-3">
          <label className="form-label" htmlFor="nombre">
            Nombre:
          </label>
          <input
            className="form-control"
            id="nombre"
            name="nombre"
            required
            type="text"
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="codigoArea">
            Código de Área:
          </label>
          <input
            className="form-control"
            id="codigoArea"
            maxLength="4"
            minLength="4"
            required
            name="codigoArea"
            type="text"
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="telefono">
            Teléfono:
          </label>
          <input
            className="form-control"
            id="telefono"
            maxLength="7"
            minLength="6"
            required
            name="telefono"
            type="text"
          />
        </div>
        <button className="btn btn-primary" type="submit" disabled={isPending}>
          {isPending ? "Guardando..." : "Guardar"}
        </button>
      </form>
    </section>
  );
}
