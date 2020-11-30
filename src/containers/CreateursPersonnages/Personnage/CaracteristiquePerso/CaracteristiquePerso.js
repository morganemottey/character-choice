import React from 'react'
import Carac from './Carac/Carac'

const CaracteristiquePerso = (props) => {
    return (
        <div>
            <div>Point Restant : <span className="badge badge-success">{props.nbPoints}</span></div>
            <div>
                <Carac 
                    nbPointAjout={props.force}
                    moins={() =>props.enleverPoint('force')}
                    plus={() => props.ajouterPoint('force')}
                    >Force</Carac>
                <Carac nbPointAjout={props.agilité}
                       moins={() =>props.enleverPoint('agilité')}
                       plus={() => props.ajouterPoint('agilité')}
                >Agilité</Carac>
                <Carac 
                    nbPointAjout={props.intelligence}
                    moins={() =>props.enleverPoint('intelligence')}
                    plus={() => props.ajouterPoint('intelligence')}
                    >Intelligence</Carac>
            </div>
        </div>
    )
}

export default CaracteristiquePerso
