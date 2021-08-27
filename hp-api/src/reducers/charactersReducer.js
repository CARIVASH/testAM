import {
    AGREGAR_PERSONAJE,
    AGREGAR_PERSONAJE_EXITO,
    AGREGAR_PERSONAJE_ERROR,
    COMENZAR_DESCARGA_PERSONAJES,
    DESCARGA_PERSONAJES_EXITO,
    DESCARGA_PERSONAJES_ERROR
} from '../types'

const intialState = {
    personajes: [],
    error: null,
    loading: false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = intialState, action){
    switch(action.type){
        case COMENZAR_DESCARGA_PERSONAJES:
        case AGREGAR_PERSONAJE:
            return {
                ...state,
                loading: action.payload
            }
        case AGREGAR_PERSONAJE_EXITO:
            return{
                ...state,
                loading: false,
                personajes: [...state.personajes, action.payload]
            }
        case AGREGAR_PERSONAJE_ERROR:
        case DESCARGA_PERSONAJES_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        case DESCARGA_PERSONAJES_EXITO:
            return{
                ...state,
                loading:false,
                error: null,
                personajes: action.payload
            }
        default:
            return state;
    }
} 