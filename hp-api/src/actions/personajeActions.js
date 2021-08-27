import {
    AGREGAR_PERSONAJE,
    AGREGAR_PERSONAJE_EXITO,
    AGREGAR_PERSONAJE_ERROR,
    COMENZAR_DESCARGA_PERSONAJES,
    DESCARGA_PERSONAJES_EXITO,
    DESCARGA_PERSONAJES_ERROR,
    COMENZAR_DESCARGA_ESTUDIANTES,
    DESCARGA_ESTUDIANTES_EXITO,
    DESCARGA_ESTUDIANTES_ERROR
} from '../types'
import clienteAxios from '../config/axios';

export function agregarNuevoPesonaje(personaje){
    return async (dispatch) => {
        dispatch( agregarPersonaje() );

        try{
            await clienteAxios.post('/characters', personaje);

            dispatch( agregarPersonajeExito(personaje) );
        }catch(error){
            console.log(error);

            dispatch( agregarPersonajeError(true) );
        }
    }
}

const agregarPersonaje = () => ({
    type: AGREGAR_PERSONAJE,
    payload: true
})

// Creación exitosa de personaje
const agregarPersonajeExito = personaje => ({
    type: AGREGAR_PERSONAJE_EXITO,
    payload: personaje
})

// Error al crear nuevo personaje
const agregarPersonajeError = estado => ({
    type: AGREGAR_PERSONAJE_ERROR,
    payload: estado
})

// Descrga de personajes
export function obtenerPersonajes(){
    return async (dispatch) => {
        dispatch(descargarPersonajes() );

        try {
            const respuesta = await clienteAxios.get('/characters');
            dispatch( descargaPersonajesExitosa(respuesta.data) )
        } catch (error) {
            console.log(error);
            dispatch( descargaPersonajesError() )
        }
    }
}

const descargarPersonajes = ()=>({
    type: COMENZAR_DESCARGA_PERSONAJES,
    payload: true
})

const descargaPersonajesExitosa = personajes =>({
    type: DESCARGA_PERSONAJES_EXITO,
    payload: personajes
})

const descargaPersonajesError = ()=> ({
    type: DESCARGA_PERSONAJES_ERROR,
    payload: true
})
