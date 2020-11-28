import React from 'react'

const Personnage = (props) => {
    return (
        <div>
            <div className="row no-gutters">
                <div className="col-6">Image : {props.image}</div>
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
