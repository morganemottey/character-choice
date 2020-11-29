import React, { Component } from 'react'
import Titre from '../../components/Titre/Titre'
import Bouton from '../../components/Bouton/Bouton'
import Personnage from './Personnage/Personnage'

export default class CreateursPersonnages extends Component {
    state = {
        personnage : {
            image : 1,
            force: 2,
            agilité: 3,
            intelligence: 4
        },
        nbPoints : 0
    }
    handlePrecedente = () => {
        this.setState(oldState => {
            const newPersonnage = {...oldState.personnage}
            if (oldState.personnage.image <= 1) newPersonnage.image = 3
            else newPersonnage.image --
            return {personnage: newPersonnage}
        })
        console.log('etape précédente')
    }
    handleSuivante = () => {
        this.setState(oldState => {
            const newPersonnage = {...oldState.personnage};
            if (oldState.personnage.image >= 3) newPersonnage.image = 1
            else newPersonnage.image ++
            return {personnage : newPersonnage}
        })
        console.log('etape suivante')
    }
    render() {
        return (
            <div className="container">
            <Titre>Créateur de Personnages</Titre>
            <Personnage 
                {...this.state.personnage}
                nbPoints={this.state.nbPoints}
                precedente={this.handlePrecedente}
                suivante={this.handleSuivante}
            />
            <div>Armes</div>
            <div className="row no-gutters">
                <Bouton typeBtn="btn-danger" css="col-6" clic={()=> console.log('Reinitiliser')}>Réinitialiser</Bouton>
                <Bouton typeBtn="btn-success" css="col-6" clic={()=> console.log('Créer')}>Créer</Bouton>
            </div>
    </div>
        )
    }
}
