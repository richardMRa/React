// Aqui debemos crear nuestro contexto y nuestro provider.
import { createContext, useState } from "react"

export const ContextoFormulario = createContext()

const ContextoFormularioProvider = ({ children }) => {

    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        nombrePokemon: ''
    });
    const addFormData = (val) => {
        setFormData({...formData, [val.name]: val.value})
    }

    return (
        <ContextoFormulario.Provider
            value={{
                formData,
                addFormData
            }}
        >
            {children}

        </ContextoFormulario.Provider>

    )



}

export default ContextoFormularioProvider;