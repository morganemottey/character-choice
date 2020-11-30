import React from 'react'

const Arme = (props) => {
    return (
        <div className="row no-gutters">
            <div>
                <img src={props.imageArm} alt={props.children}/>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Arme
