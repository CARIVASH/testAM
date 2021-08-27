import React, { useState } from 'react';
import bookmarkU from '../assets/svg/bookmarkDisabled.svg'
import bookmarkS from '../assets/svg/bookmarkSelected.svg'

const Cards = (props) => {

    const { name, alive, gender, dateOfBirth, house, eyeColour, hairColour, hogwartsStudent, image } = props.personaje;
    const [icon, setIcon] = useState(bookmarkU);
    const [value, setValue] = useState(true);
    const favoriteChars = JSON.parse(localStorage.getItem('Favorites'));
    
    const changeIcon = (valueB) => {
        if (valueB) {
            setIcon(bookmarkS);
            setValue(false);
        } else {
            setIcon(bookmarkU)
            setValue(true);
        }
    }
    return (
        <div className="body-card">
            {
                house === 'Gryffindor' ?
                    <div className="bg-codeG">
                        <img src={image} alt={name} />
                    </div>
                    :
                    house === 'Ravenclaw' ?
                        <div className="bg-codeR">
                            <img src={image} alt={name} />
                        </div>
                        :
                        house === 'Slytherin' ?
                            <div className="bg-codeS">
                                <img src={image} alt={name} />
                            </div>
                            :
                            house === 'Hufflepuff' ?
                                <div className="bg-codeH">
                                    <img src={image} alt={name} />
                                </div>
                                :
                                <div className="bg-code">
                                    <img src={image} alt={name} />
                                </div>
            }
            {
                alive ?
                    <div className="content-card">
                        <div className="header-card">
                            <span>{alive ? 'Vivo' : 'Finado'} / {hogwartsStudent ? 'Estudiante' : 'Staff'}</span>
                            <img onClick={() => {
                                 props.getCharacter({charName:name, charImage:image});
                                changeIcon(value)
                            }}
                                src={icon} alt="bookmark" />
                        </div>
                        <div className="title-card">
                            <span>{name}</span>
                        </div>
                        <div className="info-card">
                            <ul>
                                <li>
                                    <strong>Cumpleaños:</strong>
                                    <span>{dateOfBirth ? dateOfBirth : 'No hay datos'}</span>
                                </li>
                                <li>
                                    <strong>Género:</strong>
                                    <span>{gender}</span>
                                </li>
                                <li>
                                    <strong>Color de ojos:</strong>
                                    <span>{eyeColour}</span>
                                </li>
                                <li>
                                    <strong>Color de pelo:</strong>
                                    <span>{hairColour}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="header-card-sm">
                            <span>{alive ? 'Vivo' : 'Finado'} / {hogwartsStudent ? 'Estudiante' : 'Staff'}</span>
                            <img onClick={() => {
                               props.getCharacter({charName:name, charImage:image});
                                changeIcon(value)
                            }
                            } src={icon} alt="bookmark" />
                        </div>
                    </div>
                    :
                    <div className="content-card-f">
                        <div className="header-card">
                            <span>{alive ? 'Vivo' : 'Finado'} / {hogwartsStudent ? 'Estudiante' : 'Staff'}</span>
                            <img onClick={() => {
                               props.getCharacter({charName:name, charImage:image});
                                changeIcon(value)
                            }
                            } src={icon} alt="bookmark" />
                        </div>
                        <div className="title-card">
                            <span>{name}</span>
                        </div>
                        <div className="info-card">
                            <ul>
                                <li>
                                    <strong>Cumpleaños:</strong>
                                    <span>{dateOfBirth ? dateOfBirth : 'No hay datos'}</span>
                                </li>
                                <li>
                                    <strong>Género:</strong>
                                    <span>{gender}</span>
                                </li>
                                <li>
                                    <strong>Color de ojos:</strong>
                                    <span>{eyeColour}</span>
                                </li>
                                <li>
                                    <strong>Color de pelo:</strong>
                                    <span>{hairColour}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
            }
        </div>
    );
}

export default Cards;