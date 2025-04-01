// src/pages/LoginPage.jsx

import React, { useState } from 'react'; // Importation de React et du hook useState pour gérer les champs du formulaire
import { Link, useNavigate } from 'react-router-dom'; // Importation de Link pour la navigation et useNavigate pour rediriger après connexion
import { useDispatch } from 'react-redux'; // Importation de useDispatch pour modifier le state Redux
import { setToken } from '../features/userSlice'; // Importation de l'action Redux qui met à jour le token utilisateur
import logo from '../assets/img/argentBankLogo.png';

const LoginPage = () => {
  // Hook Redux pour dispatcher des actions
  const dispatch = useDispatch();

  // Hook de navigation pour rediriger après connexion
  const navigate = useNavigate();

  // États locaux pour stocker les valeurs du formulaire
  const [username, setUsername] = useState(''); // Stocke l'email (nom d'utilisateur)
  const [password, setPassword] = useState(''); // Stocke le mot de passe
  const [rememberMe, setRememberMe] = useState(false); // Stocke l'état de la case "Remember me"

  // Fonction exécutée lors de la soumission du formulaire de connexion
  const handleLogin = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // Appelle la fonction qui envoie les identifiants à l'API pour récupérer un token
    const token = await loginUser(username, password);

    if (token) {
      // Stocke le token dans Redux via le store
      dispatch(setToken(token));

      // Si "Remember me" est coché, on sauvegarde le token dans localStorage
      if (rememberMe) {
        localStorage.setItem('token', token);
      }

      // Redirige l'utilisateur vers la page de son compte après connexion
      navigate('/user');
    } else {
      alert('Login failed'); // Affiche un message d'erreur si la connexion échoue
    }
  };

  // Fonction qui envoie une requête à l'API pour récupérer le token d'authentification
  const loginUser = async (username, password) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }, // Indique que l'on envoie des données JSON
        body: JSON.stringify({ email: username, password }), // Convertit les données en JSON
      });

      const data = await response.json(); // Convertit la réponse en JSON
      return data.body?.token; // Retourne le token s'il est présent dans la réponse
    } catch (error) {
      console.error('Login error:', error); // Affiche une erreur dans la console en cas de problème
      return null;
    }
  };

  return (
    <div>
      {/* Barre de navigation */}
      <nav className="main-nav">
        {/* Logo de la banque qui redirige vers la page d'accueil */}
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>

        {/* Bouton de connexion */}
        <div>
          <Link className="main-nav-item" to="/sign-in">
            <i className="fa fa-user-circle"></i> Sign In
          </Link>
        </div>
      </nav>

      {/* Contenu principal */}
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>

          {/* Formulaire de connexion */}
          <form onSubmit={handleLogin}>
            {/* Champ email */}
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)} // Met à jour le state en temps réel
              />
            </div>

            {/* Champ mot de passe */}
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Met à jour le state en temps réel
              />
            </div>

            {/* Case à cocher "Remember me" */}
            <div className="input-remember">
              <input
                type="checkbox"
                id="remember-me"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)} // Inverse l'état du checkbox
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>

            {/* Bouton de soumission */}
            <button type="submit" className="sign-in-button">
              Sign In
            </button>
          </form>
        </section>
      </main>

      {/* Pied de page */}
      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </div>
  );
};

export default LoginPage; // Exporte le composant pour être utilisé ailleurs
