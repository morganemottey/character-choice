import React from 'react'
import classes from './Carac.module.css'

const Carac = (props) => {
    let carre = [];
    for (let i = 0; i < props.nbPointAjout; i++) {
        carre.push(<div key={i} className={classes.points}></div>)
    } // attention ne pas oublier de mettre une key !
    return (
        <div>
            <div className="row no-gutters">
                <div className= {[classes.signe, classes.moins].join(' ')} onClick={() => console.log('moins')}></div>
                <div>{props.children}</div> {carre}
                <div className= {[classes.signe, classes.plus].join(' ')} onClick={() => console.log('plus')}></div>
            </div>
        </div>
    )
}
// utilisation d'une boucle for afin d'incrémenter le nb de point avec des carré sous forme de div avec le css provenant de notre fichier cmportant la classe '.point'
export default Carac
