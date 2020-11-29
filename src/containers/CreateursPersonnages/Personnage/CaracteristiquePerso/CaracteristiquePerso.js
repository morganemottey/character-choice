import React from 'react'

const CaracteristiquePerso = (props) => {
    return (
        <div>
            <div>Point Restant : <span className="badge badge-success">{props.nbPoints}</span></div>
            <div>
                Force : {props.force} <br></br>
                Agilité : {props.agilité} <br></br>
                Intelligence : {props.intelligence}
            </div>
        </div>
    )
}

export default CaracteristiquePerso
