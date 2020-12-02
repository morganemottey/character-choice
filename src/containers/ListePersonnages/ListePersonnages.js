import React, { Component } from 'react'
import axios from 'axios'
import Titre from '../../components/Titre/Titre'
import Personnage from './Personnage/Personnage'

export default class ListePersonnages extends Component {
    state = {
        personnages: null,
        loading: false
    }
    loadData = () => {
        this.setState({loading: true})
        axios.get('https://creaperso-8d597.firebaseio.com/persos.json')
        .then(response => { // nous allons transformer les objets en tableau afin d'avoir accès au valeur
            const newPersonnages = Object.values(response.data)
            this.setState({
                personnages: newPersonnages,
                loading: false
            })
        })
        .catch(response =>{
            this.setState({loading: false})
            console.log('error')
        })
    }
    componentDidMount = () => {
        this.loadData();
    }
    componentDidUpdate = (oldProps, oldState) => {
        if(oldProps.refresh !== this.props.refresh) {
            this.loadData();
        }
    }
    render() {
        return (
            <div>
                { this.state.loading && <div>Chargement ...</div> }
                { !this.state.loading && this.state.personnages && //ajout de this.state.personnage car au 1er chargement de notre composant personnages ne peut pas etre à null, sinon une erreur console sera déclenché donc on est obligé de le tester
                    <div className="row no-gutters">
                        { this.state.personnages.map((perso,indice) => {
                            return <div key={indice} className="col-6">
                                <Titre>{perso.name}</Titre>
                                <Personnage {...perso.perso}/> 
                                {/* on envoit toutes les infos récupére de notre base de donnée sous forme de props au composant Personnage */}
                                </div>
                        })} 
                    </div> 
                }
            </div>
        )
    }
}
