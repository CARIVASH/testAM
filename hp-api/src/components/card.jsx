import React, { Fragment, useState, useEffect } from 'react';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { obtenerPersonajes } from '../actions/personajeActions'
import Cards from './cards';


const Card = () => {
    const dispatch = useDispatch();
    const [filter, setFilter] = useState('');
    const [listFavorites, setListFavorites] = useState([]);
    const [erase, setToErase] = useState();

    useEffect(() => {
        // Consulta de API
        const cargarPersonajes = () => dispatch(obtenerPersonajes())
        cargarPersonajes();
    }, [])

    useEffect(() => {
        const localList = JSON.parse(localStorage.getItem('Favorites'));
        // if (typeof erase === Number) {
        //     const newArray = localList;
        //     newArray.splice(erase, 1);
        //     console.log(newArray);
        //     localStorage.setItem('Favorites', JSON.stringify(newArray))
        // }
        if (localList) {
            localList.filter(data => {
                if (data.length !== 0) {
                    if (localList.length < 5) {
                        console.log(localList);
                        const storedArray = JSON.parse(localStorage.getItem('Favorites'));
                        storedArray.push(localList);
                        storedArray.some(data => {
                            if (data.length !== 0) localStorage.setItem('Favorites', JSON.stringify(storedArray))
                        })
                    } else {
                        const newArray = localList;
                        newArray.splice(5);
                        localStorage.setItem('Favorites', JSON.stringify(newArray))
                    }
                } else {
                    const newArray = localList;
                    const empty = newArray.findIndex(emp => emp.length === 0);
                    newArray.splice(empty, 1);
                    localStorage.setItem('Favorites', JSON.stringify(localList))
                }
            })
        } else {
            localStorage.setItem('Favorites', JSON.stringify(listFavorites))
        }
    }, [listFavorites])

    // Obtener el state
    const personajes = useSelector(state => state.personajes.personajes);
    //console.log(personajes);
    const estud = personajes.filter(data => {
        if (data.hogwartsStudent) {
            return data;
        }
    }).map(dat => dat);

    const staffs = personajes.filter(data => {
        if (data.hogwartsStaff) {
            return data;
        }
    }).map(dat => dat);

    return (
        <Fragment>
            <div className="btn-filters">
                <button className="btn-normal" onClick={() => setFilter('estudiantes')}>
                    <span>Estudiantes</span>
                </button>
                <button className="btn-normal" onClick={() => setFilter('staff')}>
                    <span>Staff</span>
                </button>
            </div>
            {
                personajes.length === 0 ?
                    <h1 className="no-results">No hay personajes</h1>
                    : (
                        filter === 'estudiantes' ?
                            estud.map((personaje, index) => (
                                <Cards
                                    toErase={dat => setToErase(dat)}
                                    getCharacter={char => setListFavorites(char)}
                                    key={index}
                                    personaje={personaje}
                                />
                            ))
                            :
                            filter === 'staff' ?
                                staffs.map((personaje, index) => (
                                    <Cards
                                        toErase={dat => setToErase(dat)}
                                        getCharacter={char => setListFavorites(char)}
                                        key={index}
                                        personaje={personaje}
                                    />
                                ))
                                :
                                personajes.map((personaje, index) => (
                                    <Cards
                                        toErase={dat => setToErase(dat)}
                                        getCharacter={char => setListFavorites(char)}
                                        key={index}
                                        personaje={personaje}
                                    />
                                ))
                    )
            }
        </Fragment>
    );
}

export default Card;