import React from 'react'
import Image1 from '../../../../assets/images/persos/player1.png'
import Image2 from '../../../../assets/images/persos/player2.png'
import Image3 from '../../../../assets/images/persos/player3.png'

import classes from './ImagePerso.module.css'

const ImagePerso = (props) => {
    let imageToPrint= '';
    if (props.numImg === 1) imageToPrint = Image1
    else if (props.numImg === 2) imageToPrint = Image2
    else if (props.numImg === 3) imageToPrint = Image3

    return (
        <div>
            <div className="row no-gutters text-center align-items-center">
                <div className={['col-1', classes.gauche, classes.fleche].join(' ')} onClick={props.flecheGauche}></div>
                <div className='col'>
                    <img src={imageToPrint} alt='img1'/>
                </div>
                <div className={['col-1', classes.droite, classes.fleche].join(' ')} onClick={props.flecheDroite}></div>
            </div>
        </div>
    )
}

export default ImagePerso
