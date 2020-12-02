import React, { Component } from 'react'
import Titre from '../../components/Titre/Titre'
import Bouton from '../../components/Bouton/Bouton'
import Personnage from './Personnage/Personnage'
import Armes from '../Armes/Armes'

export default class CreateursPersonnages extends Component {
    state = {
        personnage : {
            image : 1,
            force: 0,
            agilité: 0,
            intelligence: 0,
            arme: null
        },
        nbPoints : 7,
        armes: ['arc' , 'epee', 'fleau', 'hache']
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
    handleEnleverPoint = (carac) => {
        this.setState((oldState, props) => {
            if(oldState.personnage[carac] <= 0 || oldState.nbPoints >= 7) return null
            const newPointCarac = oldState.personnage[carac] - 1;
            const newNbPoint = oldState.nbPoints + 1;
            const newPerso = {...oldState.personnage};
            newPerso[carac] = newPointCarac;
            return {
                personnage : newPerso,
                nbPoints : newNbPoint
            }
        })  
    }
    handleAjouterPoint = (carac) => {
        this.setState((oldState, props) => {
            if(oldState.personnage[carac] >= 5 || oldState.nbPoints <= 0) return null
            const newPointCarac = oldState.personnage[carac] + 1;
            const newNbPoint = oldState.nbPoints - 1;
            const newPerso = {...oldState.personnage}
            newPerso[carac] = newPointCarac;
            return {
                personnage : newPerso,
                nbPoints : newNbPoint
            }
        })
    }
    handleChangeArme = (arme) => {
        const newPerso = {...this.state.personnage}
        newPerso.arme = arme
        this.setState({ personnage: newPerso})
    }
    handleReinitilisation = () => {
        this.setState({
            personnage : {
                image : 1,
                force: 0,
                agilité: 0,
                intelligence: 0,
                arme: null
            },
            nbPoints : 7,
            armes: ['arc' , 'epee', 'fleau', 'hache']
        })
    }
    handleCreate = () => {
        alert('Personnage validé')
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
                enleverPoint={this.handleEnleverPoint}
                ajouterPoint={this.handleAjouterPoint}
            />
            <Armes 
                changeArme={this.handleChangeArme}
                typeArmes={this.state.armes}
                currentArme={this.state.personnage.arme}
            />
            <div className="row no-gutters">
                <Bouton typeBtn="btn-danger" css="col-6" clic={this.handleReinitilisation}>Réinitialiser</Bouton>
                <Bouton typeBtn="btn-success" css="col-6" clic={this.handleCreate}>Créer</Bouton>
            </div>
    </div>
        )
    }
}
