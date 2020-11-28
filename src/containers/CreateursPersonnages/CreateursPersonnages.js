import React, { Component } from 'react'
import Titre from '../../components/Titre/Titre'
import Bouton from '../../components/Bouton/Bouton'
import Personnage from './Personnage/Personnage'

export default class CreateursPersonnages extends Component {
    state = {
        personnage : {
            image : 1,
            force: 0,
            agilité: 0,
            intelligence: 0
        }
    }
    render() {
        return (
            <div className="container">
            <Titre>Créateur de Personnages</Titre>
            <Personnage {...this.state.personnage}/>
            <div>Armes</div>
            <div className="row no-gutters">
                <Bouton typeBtn="btn-danger" css="col-6" clic={()=> console.log('Reinitiliser')}>Réinitialiser</Bouton>
                <Bouton typeBtn="btn-success" css="col-6" clic={()=> console.log('Créer')}>Créer</Bouton>
            </div>
    </div>
        )
    }
}
