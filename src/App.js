import React, { Component } from 'react'
import CreateursPersonnages from './containers/CreateursPersonnages/CreateursPersonnages'
import ListePersonnages from './containers/ListePersonnages/ListePersonnages'


export default class App extends Component {
  state = {
    refresh: false
  }
  handleRefresh = () => {
    this.setState((oldState) => {
      return {
        refresh : !oldState.refresh
      }
    })
  }
  render() {
    return (
      <div className="container">
      <div>
        <CreateursPersonnages refresh={this.handleRefresh}/>
        <ListePersonnages refresh={this.state.refresh}/>
      </div>
    </div>
    )
  }
}
// passage d'un composant stateless à statefull car nous rajoutons un state pour refresh la page apres creation d'un Personnage. Pour eviter de reloader la page et d'afficher notre perso juste apres creation
// Une fois la creation du personnage refresh, nous devons refresh la liste des perso avec un oldState
