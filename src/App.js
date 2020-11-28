import React from 'react'
import Titre from './components/Titre/Titre'
import Bouton from './components/Bouton/Bouton'

function App() {
  return (
    <div className="container">
      <Titre>Créateur de Personnages</Titre>
      <div>Personnages</div>
      <div>Armes</div>
      <div className="row no-gutters">
        <Bouton typeBtn="btn-danger" css="col-6" clic={()=> console.log('Reinitiliser')}>Réinitialiser</Bouton>
        <Bouton typeBtn="btn-success" css="col-6" clic={()=> console.log('Créer')}>Créer</Bouton>
      </div>
    </div>
  );
}

export default App;
