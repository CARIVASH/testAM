import React, { Fragment, useState } from 'react';
import fav from '../assets/svg/bookmarkDisabled.svg'
import add from '../assets/svg/User_fill_add.svg'
import close from '../assets/svg/close.svg'
import trash from '../assets/svg/Trash.svg'

// Redux
import { useDispatch, useSelector } from 'react-redux'

// Actions de Redux
import { agregarNuevoPesonaje } from '../actions/personajeActions'

const ActionButton = ({ actionName }) => {

    const [id, setId] = useState('00000');
    const [showModal, setConfigModal] = useState(false);
    const [name, SetName] = useState('');
    const [dateOfBirth, SetBirth] = useState('');
    const [eyeColour, SetEyes] = useState('');
    const [hairColour, SetHair] = useState('');
    const [gender, SetGender] = useState('Mujer');
    const [hogwartsStudent, SetHogwartsStudent] = useState(true);
    const [hogwartsStaff, SetHogwartsStaff] = useState(false);
    const [image, SetFile] = useState('');

    const [favorites, setFavorties] = useState(false);

    // uso de useDispatch para crear una función
    const dispatch = useDispatch();

    // manda llamar el action de 'pesonajeActions'
    const agregarPersonaje = personaje => dispatch(agregarNuevoPesonaje(personaje))

    // On Submit
    const submitNuevoPersonaje = e => {
        e.preventDefault();

        // Validar formulario
        if(name.trim() === '' || dateOfBirth.trim() === '' || eyeColour.trim() === '' || hairColour.trim() === '' || image.trim() === ''){
            return;
        }
        // Checar errores

        // Añadir nuevo personaje
        agregarPersonaje({
            id,
            name,
            dateOfBirth,
            eyeColour,
            hairColour,
            gender,
            hogwartsStudent,
            hogwartsStaff,
            image
        });
    }

    const openCloseFavs = value => {
        value = !value;
        setFavorties(value);
    }
    return (
        <Fragment>
            {
                favorites ? 
                <div className="favorites-list">
                    <ul>
                        <li>
                            <div className="char-fav">
                                <img src="https://picsum.photos/30" alt="Profile" />
                                <span>Name</span>
                                <img src={trash} alt="Erase" />
                            </div>
                        </li>
                    </ul>
                </div>
                :
                null
            }
            {
                actionName === 'Favoritos' ?
                    <button className="btn-action" onClick={() => openCloseFavs(favorites)}>
                        <span>{actionName}</span>
                        <img src={fav} alt="favorite" />
                    </button>
                    :
                    <button className="btn-action2" onClick={() => setConfigModal(true)}>
                        <span>{actionName}</span>
                        <img src={add} alt="addCharacter" />
                    </button>
            }
            {
                showModal ?
                    <div className="modal">
                        <div className="modal-bg"></div>
                        <div className="card-form">
                            <div className="header-modal">
                                <h2>Agregar un personaje</h2>
                                <img src={close} alt="close" onClick={() => setConfigModal(false)} />
                            </div>
                            <form onSubmit={submitNuevoPersonaje} className="form-flex">
                                <div className="input-section1">
                                    <div className="input-name">
                                        <label htmlFor="name">Nombre</label>
                                        <input
                                            type="text"
                                            name="name"
                                            autoComplete="off"
                                            value={name}
                                            onChange={e => SetName(e.target.value)}
                                        />
                                    </div>
                                    <div className="input-birth">
                                        <label htmlFor="birth">Cumpleaños</label>
                                        <input
                                            type="date"
                                            name="birth"
                                            value={dateOfBirth}
                                            onChange={e => SetBirth(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="input-section2">
                                    <div className="input-eyes">
                                        <label htmlFor="eyes">Color de ojos</label>
                                        <input
                                            type="text"
                                            name="eyes"
                                            value={eyeColour}
                                            onChange={e => SetEyes(e.target.value)}
                                        />
                                    </div>
                                    <div className="input-hair">
                                        <label htmlFor="hair">Colo de pelo</label>
                                        <input
                                            type="text"
                                            name="hair"
                                            value={hairColour}
                                            onChange={e => SetHair(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="input-section3">
                                    <div className="gender">
                                        <label htmlFor="gender">Género</label>
                                        <div className="input-gender">
                                            <div className="female">
                                                <input
                                                    type="radio"
                                                    id="gender"
                                                    name="genderP"
                                                    defaultChecked
                                                    value={gender}
                                                    onChange={e => SetGender(e.target.value)}
                                                /><label htmlFor="gender">Mujer</label>
                                            </div>
                                            <div className="male">
                                                <input
                                                    type="radio"
                                                    id="gender"
                                                    name="genderP"
                                                    value={gender}
                                                    onChange={e => SetGender(e.target.value)}
                                                /><label htmlFor="gender">Hombre</label>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="pos">
                                        <label htmlFor="pos">Posición</label>
                                        <div className="input-position">
                                            <div className="student">
                                                <input
                                                    type="radio"
                                                    id="pos"
                                                    name="pos"
                                                    defaultChecked
                                                    value={hogwartsStudent}
                                                    onChange={e => {SetHogwartsStudent(true); SetHogwartsStudent(false)}}
                                                /><label htmlFor="pos">Estudiante</label>
                                            </div>
                                            <div className="staff">
                                                <input
                                                    type="radio"
                                                    id="pos"
                                                    name="pos"
                                                    value={hogwartsStaff}
                                                    onChange={e => {SetHogwartsStudent(false);SetHogwartsStaff(true)}}
                                                /><label htmlFor="pos">Staff</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="filePhoto">
                                    <label htmlFor="files" className="textFile">Fotografía{' '}</label>
                                    <label htmlFor="files">(input type file)</label>
                                    <input 
                                    id="files" 
                                    type="file" 
                                    accept="image/png, image/jpg, image/jpeg" 
                                    value={image} 
                                    onChange={e => SetFile(e.target.value)}
                                    />
                                </div>
                                <button type="submit" className="btn-normal btn-submit">Guardar</button>
                            </form>
                        </div>
                    </div>
                    :
                    null
            }
        </Fragment>
    );
}

export default ActionButton;