// Importation des bibliothèques nécessaires depuis React et React Router
import React, { useState, useEffect } from 'react';
import { SignUp, Login, Homepage } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Composant principal de l'application
const App = () => {
  // État local pour stocker le token d'authentification
  const [token, setToken] = useState(false);

  // Stocke le token dans le sessionStorage lorsqu'il est mis à jour
  if (token) {
    sessionStorage.setItem('token', JSON.stringify(token));
  }

  // Effet secondaire pour récupérer le token du sessionStorage lors du montage du composant
  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      let data = JSON.parse(sessionStorage.getItem('token'));
      setToken(data);
    }
  }, []);

  return (
    <div>
      {/* Configuration du Router pour gérer la navigation dans l'application */}
      <Router>
        <Routes>
          {/* Route vers la page d'inscription */}
          <Route path={'/signup'} element={<SignUp />} />
          
          {/* Route vers la page de connexion avec transmission de la fonction setToken */}
          <Route path={'/'} element={<Login setToken={setToken} />} />
          
          {/* Route vers la page d'accueil, accessible uniquement si le token est présent */}
          {token ? <Route path={'/homepage'} element={<Homepage token={token} />} /> : ''}
        </Routes>
      </Router>
    </div>
  );
};

// Exportation du composant App comme composant par défaut
export default App;
