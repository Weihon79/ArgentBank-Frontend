import React from 'react'; // Importation de React pour la création du composant
import { Link } from 'react-router-dom'; // Importation de Link pour gérer la navigation avec React Router
import logo from '../assets/img/argentBankLogo.png';
import chatIcon from '../assets/img/icon-chat.png';
import moneyIcon from '../assets/img/icon-money.png';
import securityIcon from '../assets/img/icon-security.png';

const HomePage = () => {
  return (
    <div>
      {/* Barre de navigation */}
      <nav className="main-nav">
        {/* Logo de la banque qui redirige vers la page d'accueil */}
        <Link to="/" className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={logo} 
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1> {/* Texte caché pour l'accessibilité */}
        </Link>

        {/* Lien de connexion pour accéder à la page de login */}
        <div>
          <Link to="/login" className="main-nav-item">
            <i className="fa fa-user-circle"></i> {/* Icône utilisateur */}
            <p className="main-nav-item-text">Sign In</p> {/* Texte du bouton de connexion */}
          </Link>
        </div>
      </nav>

      {/* Contenu principal */}
      <main>
        {/* Section de promotion avec un message publicitaire */}
        <div className="hero">
          <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2> {/* Titre caché pour l'accessibilité */}
            <p className="subtitle">No fees.</p> {/* Slogan 1 */}
            <p className="subtitle">No minimum deposit.</p> {/* Slogan 2 */}
            <p className="subtitle">High interest rates.</p> {/* Slogan 3 */}
            <p className="text">
              Open a savings account with Argent Bank today! {/* Message incitant à ouvrir un compte */}
            </p>
          </section>
        </div>

        {/* Section des fonctionnalités de la banque */}
        <section className="features">
          <h2 className="sr-only">Features</h2> {/* Titre caché pour l'accessibilité */}

          {/* Fonctionnalité 1 : Service client disponible 24/7 */}
          <div className="feature-item">
            <img
              src={chatIcon} 
              alt="Chat Icon"
              className="feature-icon"
            />
            <h3 className="feature-item-title">You are our #1 priority</h3> {/* Titre de la fonctionnalité */}
            <p>
              Need to talk to a representative? You can get in touch through our
              24/7 chat or through a phone call in less than 5 minutes.
            </p> {/* Description de la fonctionnalité */}
          </div>

          {/* Fonctionnalité 2 : Plus d'économies = taux d'intérêt plus élevés */}
          <div className="feature-item">
            <img
              src={moneyIcon}
              alt="Money Icon"
              className="feature-icon"
            />
            <h3 className="feature-item-title">
              More savings means higher rates
            </h3> {/* Titre de la fonctionnalité */}
            <p>
              The more you save with us, the higher your interest rate will be!
            </p> {/* Description de la fonctionnalité */}
          </div>

          {/* Fonctionnalité 3 : Sécurité renforcée */}
          <div className="feature-item">
            <img
              src={securityIcon}
              alt="Security Icon"
              className="feature-icon"
            />
            <h3 className="feature-item-title">Security you can trust</h3> {/* Titre de la fonctionnalité */}
            <p>
              We use top of the line encryption to make sure your data and money
              is always safe.
            </p> {/* Description de la fonctionnalité */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage; // Exportation du composant pour être utilisé ailleurs
