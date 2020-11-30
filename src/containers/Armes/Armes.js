/* eslint-disable default-case */
import React from 'react'
import Arme from './Arme/Arme'
import img1 from '../../assets/images/armes/arc.png'
import img2 from '../../assets/images/armes/epee.png'
import img3 from '../../assets/images/armes/fleau.png'
import img4 from '../../assets/images/armes/hache.png'

const Armes = (props) => {
    return (
        <div>
            <div className="row no-gutters text-center">
                {
                    props.typeArmes.map(arme => {
                        let imageArm;
                        switch (arme) {
                            case 'arc': imageArm = img1;
                            break;
                            case 'epee' : imageArm = img2;
                            break;
                            case 'fleau' : imageArm = img3;
                            break;
                            case 'hache' : imageArm = img4;
                            break;
                        }
                        return (
                            <div className="col-3" key={arme}>
                                <Arme imageArm={imageArm}>{arme}</Arme>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Armes
