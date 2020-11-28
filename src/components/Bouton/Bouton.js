import React from 'react'

const Bouton = (props) => {
    const btnCss= `${props.typeBtn} ${props.css}`
    return <button className={btnCss} onClick={props.clic}>{props.children}</button>
}

export default Bouton
