import React from 'react'
import CreateursPersonnages from './containers/CreateursPersonnages/CreateursPersonnages'
import ListePersonnages from './containers/ListePersonnages/ListePersonnages'


function App() {
  return (
    <div className="container">
      <div>
        <CreateursPersonnages/>
        <ListePersonnages/>
      </div>
    </div>
  );
}

export default App;
