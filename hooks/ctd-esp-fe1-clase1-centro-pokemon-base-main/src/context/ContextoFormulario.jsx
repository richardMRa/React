// Aqui debemos crear nuestro contexto y nuestro provider.
import { createContext, useReducer, useState } from "react"

export const ContextoFormulario = createContext()

const ContextoFormularioProvider = ({ children }) => {

    const reducer = (state, action) => {
        switch (action.type) {
            case 'add_data':
                return {...state, [action.payload.name]: action.payload.value}
            case 'reset_data':
                return {}
        }
    }
    
    const initialValue = {
        nombre: '',
        apellido: '',
        email: '',
        nombrePokemon: ''
    }
    const [state, dispatch] = useReducer(reducer, initialValue)

    /*const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        nombrePokemon: ''
    });
    const addFormData = (val) => {
        setFormData({...formData, [val.name]: val.value})
    }
    */
    return (
        <ContextoFormulario.Provider
            value={{
                state,
                dispatch
            }}
        >
            {children}

        </ContextoFormulario.Provider>

    )



}

export default ContextoFormularioProvider;