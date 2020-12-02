import React, { Component } from 'react'
import Titre from '../../components/Titre/Titre'
import Bouton from '../../components/Bouton/Bouton'
import Personnage from './Personnage/Personnage'
import Armes from '../Armes/Armes'
import axios from 'axios'

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
        armes: null,
        loading: false
        // armes: ['arc' , 'epee', 'fleau', 'hache'] // remplacement de ce tableau par les infos récupéré en Base de donnée donc on passe armes à null
    }
    componentDidMount = () => { //attention ! ne pas oublier d'indiquer 'armes.json' à la fin de notre url
        this.setState({loading: true})
        axios.get('https://creaperso-8d597.firebaseio.com/armes.json')  //armes etant un object il va falloir transformer celui ci en tableau
        .then(response => {
            const armesArray = Object.values(response.data)
            this.setState({
                loading: false,
                armes: armesArray
            })
        }) // il va falloir mettre à jour 'armes: null' dans notre state suite à la transformation de notre objet en tableau à partir de la BDD avec un setState,
        .catch(error => {
            this.setState({loading: false})
            console.log('error')
        })                                                              // grace à une fonction Object.values(response.data)
    }
    // Le chargement de nos armes se fait dans un second de temps pour permettre d'avoir une application userFriendly il va ffaloir rajouter un spinner, message ou loading. On va donc ajouter un nouvel état dans notre state 'loading' initilisé à false
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
            { 
                this.state.loading && <div> Chargement ...</div> 
            } 
            {/* une fois le composant monté affichage de notre loader avant chargement de toutes les armes provenant de notre BDD */}
            {
                this.state.armes &&   //si l'info armes contient des valeurs (qui n'est pas à null) alors nous afficherons bien le composant Armes.
                <Armes // on cherche donc qu'une fois que notre BDD est chargé, on souhaite afficher le composant d'Armes
                changeArme={this.handleChangeArme}
                typeArmes={this.state.armes}
                currentArme={this.state.personnage.arme}
            />
            }
            <div className="row no-gutters">
                <Bouton typeBtn="btn-danger" css="col-6" clic={this.handleReinitilisation}>Réinitialiser</Bouton>
                <Bouton typeBtn="btn-success" css="col-6" clic={this.handleCreate}>Créer</Bouton>
            </div>
    </div>
        )
    }
}
