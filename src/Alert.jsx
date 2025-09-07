/**
 * @param {{
 *   estadoAccion?: {
 *     success: boolean,
 *     body: { message: string }
 *   }
 * }} props
 */
export default function Alert({ estadoAccion }) {
  if (!estadoAccion) {
    return null;
  }

  return (
    <p
      className={
        estadoAccion.success ? "alert alert-success" : "alert alert-danger"
      }
    >
      {estadoAccion.success
        ? "Contacto creado exitosamente!"
        : "Error al crear contacto: " + estadoAccion.body.message}
    </p>
  );
}
