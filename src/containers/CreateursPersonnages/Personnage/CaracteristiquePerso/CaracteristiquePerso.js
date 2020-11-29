import React from 'react'
import Carac from './Carac/Carac'

const CaracteristiquePerso = (props) => {
    return (
        <div>
            <div>Point Restant : <span className="badge badge-success">{props.nbPoints}</span></div>
            <div>
                <Carac nbPointAjout={props.force}>Force</Carac>
                <Carac nbPointAjout={props.agilité}>Agilité</Carac>
                <Carac nbPointAjout={props.intelligence}>Intelligence</Carac>
            </div>
        </div>
    )
}

export default CaracteristiquePerso
