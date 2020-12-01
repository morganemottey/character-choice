import React from 'react'

const Arme = (props) => {
    return (
        <div className="row no-gutters">
            <div>
                <img 
                    style={{
                        opacity: props.isCurrentArme ? '1' : '0.5',
                        cursor: 'pointer'
                    }}
                    src={props.imageArm} 
                    alt={props.children}
                    onClick={props.clic}
                />
            </div>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Arme
