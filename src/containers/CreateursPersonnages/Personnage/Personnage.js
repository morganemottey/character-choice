import React from 'react'
import CaracteristiquePerso from './CaracteristiquePerso/CaracteristiquePerso'
import ImagePerso from './ImagePerso/ImagePerso'

const Personnage = (props) => {
    return (
        <div>
            <div className="row no-gutters">
                <div className="col-6">
                    <ImagePerso 
                        numImg={props.image}
                        flecheGauche={props.precedente}
                        flecheDroite={props.suivante}
                    />
                </div>
                <div className="col-6">
                    <CaracteristiquePerso
                        nbPoints={props.nbPoints}
                        force={props.force}
                        agilité={props.agilité}
                        intelligence={props.intelligence}
                    />
                </div>
            </div>
        </div>
    )
}

export default Personnage
