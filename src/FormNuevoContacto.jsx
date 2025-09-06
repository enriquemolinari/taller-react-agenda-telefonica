export default function FormNuevoContacto() {
  return (
    <section>
      <h1>Alta de Contacto</h1>
      <form method="post">
        <div class="mb-3">
          <label class="form-label" for="nombre">
            Nombre:
          </label>
          <input class="form-control" id="nombre" required type="text" />
        </div>
        <div class="mb-3">
          <label class="form-label" for="codigoArea">
            Código de Área:
          </label>
          <input
            class="form-control"
            id="codigoArea"
            maxlength="4"
            minlength="4"
            required
            type="text"
          />
        </div>
        <div class="mb-3">
          <label class="form-label" for="telefono">
            Teléfono:
          </label>
          <input
            class="form-control"
            id="telefono"
            maxlength="7"
            minlength="6"
            required
            type="text"
          />
        </div>
        <button class="btn btn-primary" type="submit">
          Guardar
        </button>
      </form>
    </section>
  );
}
