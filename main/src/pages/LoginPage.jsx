// src/pages/LoginPage.jsx

import React, { useState } from 'react'; 
import { Link, useNavigate } from 'react-router-dom'; 
import { useDispatch } from 'react-redux'; 
import { setToken, setUser } from '../features/userSlice'; // Importation de setUser
import logo from '../assets/img/argentBankLogo.png';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Appel de la fonction pour récupérer le token
    const token = await loginUser(username, password);

    if (token) {
      dispatch(setToken(token)); // Stocke le token dans Redux

      if (rememberMe) {
        localStorage.setItem('token', token);
      }

      // Récupérer les informations utilisateur avec le token
      const userData = await fetchUserProfile(token);

      if (userData) {
        dispatch(setUser(userData)); // Stocke les données utilisateur dans Redux
        navigate('/user'); // Redirige vers la page utilisateur
      } else {
        alert('Unable to retrieve user data');
      }
    } else {
      alert('Login failed');
    }
  };

  // Fonction pour récupérer le token de l'API
  const loginUser = async (username, password) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: username, password }),
      });

      const data = await response.json();
      return data.body?.token; // Retourne le token
    } catch (error) {
      console.error('Login error:', error);
      return null;
    }
  };

  // Fonction pour récupérer les informations utilisateur après connexion
  const fetchUserProfile = async (token) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'GET',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Envoie le token dans l'entête Authorization
        },
      });

      const data = await response.json();
      return data.body; // Retourne les informations utilisateur
    } catch (error) {
      console.error('Error fetching user profile:', error);
      return null;
    }
  };

  return (
    <div>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <Link className="main-nav-item" to="/sign-in">
            <i className="fa fa-user-circle"></i> Sign In
          </Link>
        </div>
      </nav>

      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleLogin}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="input-remember">
              <input
                type="checkbox"
                id="remember-me"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>

            <button type="submit" className="sign-in-button">Sign In</button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </div>
  );
};

export default LoginPage;
