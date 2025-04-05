import React from 'react'; // Importation de React pour la création du composant
import { useDispatch, useSelector } from 'react-redux'; // Importation des hooks Redux pour interagir avec le store
import { Link } from 'react-router-dom'; // Importation de Link pour gérer la navigation
import { setToken } from '../features/userSlice'; // Importation de l'action Redux pour gérer l'authentification
import logo from '../assets/img/argentBankLogo.png';

const ProfilePage = () => {
  const user = useSelector((state) => state.user); // Récupération des informations utilisateur depuis le store Redux
  const dispatch = useDispatch(); // Initialisation de useDispatch pour envoyer des actions à Redux

  const handleLogout = () => {
    dispatch(setToken(null)); // Déconnecte l'utilisateur en effaçant le token du store Redux
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
          <h1 className="sr-only">Argent Bank</h1> {/* Texte caché pour l'accessibilité */}
        </Link>

        {/* Liens de navigation */}
        <div>
          {/* Lien vers la page de profil avec l'icône utilisateur et le prénom affiché */}
          <Link className="main-nav-item" to="/profile">
            <i className="fa fa-user-circle"></i>
            {user?.firstName} {/* Affiche le prénom de l'utilisateur si disponible */}
          </Link>

          {/* Bouton de déconnexion qui efface le token utilisateur */}
          <Link className="main-nav-item" to="/" onClick={handleLogout}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        </div>
      </nav>

      {/* Contenu principal */}
      <main className="main bg-dark">
        <div className="header">
          {/* Message de bienvenue avec le prénom et nom de l'utilisateur */}
          <h1>Welcome back<br />{user ? `${user.firstName} ${user.lastName}` : 'Loading...'}</h1>
          <button className="edit-button">Edit Name</button> {/* Bouton prévu pour modifier le nom */}
        </div>

        {/* Section cachée pour l'accessibilité */}
        <h2 className="sr-only">Accounts</h2>

        {/* Section du compte courant */}
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button> {/* Bouton pour afficher les transactions */}
          </div>
        </section>

        {/* Section du compte épargne */}
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>

        {/* Section de la carte de crédit */}
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>

      {/* Pied de page */}
      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </div>
  );
};

export default ProfilePage; // Exportation du composant pour être utilisé ailleurs
