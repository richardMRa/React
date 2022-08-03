import React, { useEffect, useContext } from "react";
import { ContextoFormulario } from "../../context/ContextoFormulario";
const Detalle = () => {
  // Aqui deberíamos obtener los datos del formulario para poder mostrarlo en
  // la vista previa.
  const { formData, setFormData } = useContext(ContextoFormulario)
  useEffect(() => {
    if (formData) {
      console.log(formData)
    }
  }, [formData])
  return (
    <div className="detalle-formulario">
      <div className="encabezado">
        <h3>Vista Previa de la Solicitud</h3>
      </div>
      <section className="datos-cliente">
        <h4>Datos del Entrenador</h4>
        <div className="fila">
          <div className="row-tile-content">
            <p>Nombre: {formData['nombre']}</p>
          </div>
          <div className="row-tile-content">
            <p>Apellido: {formData['apellido']}</p>
          </div>
          <div className="row-tile-content">
            <p>Email: {formData['email']}</p>
          </div>
        </div>
      </section>
      <section className="datos-cliente">
        <h4>Datos del Pokémon</h4>
        <div className="fila">
          <div className="row-tile-content">
            <p>Nombre: {formData['nombrePokemon']}</p>
          </div>
        </div>
      </section>
      <button
        className="boton-enviar"
        onClick={() => alert("Solicitud enviada :)")}
      >
        Enviar Solicitud
      </button>
    </div>
  );
};

export default Detalle;
