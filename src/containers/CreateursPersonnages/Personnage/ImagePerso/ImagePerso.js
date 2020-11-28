import React from 'react'
import Image1 from '../../../../assets/images/persos/player1.png'
import Image2 from '../../../../assets/images/persos/player2.png'
import Image3 from '../../../../assets/images/persos/player3.png'

const ImagePerso = (props) => {
    let imageToPrint= '';
    if (props.numImg === 1) imageToPrint = Image1
    else if (props.numImg === 2) imageToPrint = Image2
    else if (props.numImg === 3) imageToPrint = Image3

    return (
        <div>
            <div>
                <img src={imageToPrint} alt='img1'/>
            </div>
        </div>
    )
}

export default ImagePerso
