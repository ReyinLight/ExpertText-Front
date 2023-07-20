import React from 'react';
import {RandomCard} from './componentes/RandomCard';
import NavBar from './componentes/NavBar';
import RefreshPageButton from './componentes/RefreshPageButton';

const App = () => {


  return (
    <div className="container mx-auto p-4 bg-emerald-100 w-full h-screen">
      
      <NavBar />
      <RandomCard />
      <RefreshPageButton />

    </div>
  );
};

export default App;