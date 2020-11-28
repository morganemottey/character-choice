import React from 'react'
import ImagePerso from './ImagePerso/ImagePerso'

const Personnage = (props) => {
    return (
        <div>
            <div className="row no-gutters">
                <div className="col-6">
                    <ImagePerso numImg={props.image}/>
                </div>
                <div className="col-6">
                    Force : {props.force} <br></br>
                    Agilité : {props.agilité} <br></br>
                    Intelligence : {props.intelligence}
                </div>
            </div>
        </div>
    )
}

export default Personnage
