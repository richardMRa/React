import React, { useEffect, useContext } from "react";
import { ContextoFormulario } from "../../context/ContextoFormulario";
const Detalle = () => {
  // Aqui deberíamos obtener los datos del formulario para poder mostrarlo en
  // la vista previa.
  const { state, dispatch } = useContext(ContextoFormulario)
  const handleSend = () => {
    alert("Solicitud enviada :)")
    dispatch({type: 'reset_data'})
  }
  useEffect(() => {
    if (state) {
      console.log(state)
    }
  }, [state])
  return (
    <div className="detalle-formulario">
      <div className="encabezado">
        <h3>Vista Previa de la Solicitud</h3>
      </div>
      <section className="datos-cliente">
        <h4>Datos del Entrenador</h4>
        <div className="fila">
          <div className="row-tile-content">
            <p>Nombre: {state['nombre']}</p>
          </div>
          <div className="row-tile-content">
            <p>Apellido: {state['apellido']}</p>
          </div>
          <div className="row-tile-content">
            <p>Email: {state['email']}</p>
          </div>
        </div>
      </section>
      <section className="datos-cliente">
        <h4>Datos del Pokémon</h4>
        <div className="fila">
          <div className="row-tile-content">
            <p>Nombre: {state['nombrePokemon']}</p>
          </div>
        </div>
      </section>
      <button
        className="boton-enviar"
        onClick={handleSend}
      >
        Enviar Solicitud
      </button>
    </div>
  );
};

export default Detalle;
