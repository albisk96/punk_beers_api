import React from 'react';
import Routes from './routes/Routes';
import BeerDataContextProvider from './contexts/BeerDataContext';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => (
  <Router>
    <BeerDataContextProvider>
      <div className="container mx-auto">
        <Routes />
      </div>
    </BeerDataContextProvider>
  </Router>
);

export default App;
