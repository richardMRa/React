import React, { useContext, useState } from "react";
import { ContextoFormulario } from "../../context/ContextoFormulario";

const Input = ({ name, label, type = "text" }) => {
  // Aqui deberíamos acceder al estado global para poder obtener los datos
  // del formulario y una manera de actualizar los mismos.

  // También, utilizaremos un estado local para manejar el estado del input.
  const {formData, addFormData} = useContext(ContextoFormulario)
  const [inputData, setInputData] = useState(null)
  const onChange = (e) => {
    // Aquí deberíamos actualizar el estado local del input.
    setInputData({name: name, value: e.target.value})
  };

  const onBlur = (e) => {
    e.preventDefault();
    addFormData(inputData)
    // Aqui deberíamos actualizar el estado global con los datos de
    // cada input.
    // TIP: Podemos utilizar el nombre de cada input para guardar
    // los datos en el estado global usando una notación de { clave: valor }
  };

  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
