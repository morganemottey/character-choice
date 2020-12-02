import React from 'react'
import Image1 from '../../../assets/images/persos/player1.png'
import Image2 from '../../../assets/images/persos/player2.png'
import Image3 from '../../../assets/images/persos/player3.png'
import img1 from '../../../assets/images/armes/arc.png'
import img2 from '../../../assets/images/armes/epee.png'
import img3 from '../../../assets/images/armes/fleau.png'
import img4 from '../../../assets/images/armes/hache.png'

const Personnage = (props) => {
    let imagePerso= '';
    if (props.image === 1) imagePerso = Image1
    else if (props.image === 2) imagePerso = Image2      //cf composant ImagePerso.js
    else if (props.image === 3) imagePerso = Image3

    let imageArme= '';
    if (props.arme === 'arc') imageArme = img1
    else if (props.arme === 'epee') imageArme = img2      //cf composant ImagePerso.js
    else if (props.arme === 'fleau') imageArme = img3
    else if (props.arme === 'hache') imageArme = img4

    return (
        <div>
            <div className="row no-gutters">
                <div className="col-6">
                    <img src={imagePerso} alt={imagePerso}/>
                </div>
                <div className="col-6">
                    Force : {props.force}
                    <br></br>
                    Agilité : {props.agilité}
                    <br></br>
                    Intelligence : {props.intelligence}
                    <img src={imageArme} alt={imageArme}/>
                </div>
            </div>
        </div>
    )
}

export default Personnage
