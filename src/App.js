import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faFlag } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">
          <img src="../logo.png" alt="Gramping Logo" />
        </div>
        <nav className="navigation">
          <ul>
            <li>
              <a href="#">Nos Campings</a>
            </li>
            <li>
              <a href="#">Nos Hébergements</a>
            </li>
            <li>
              <a href="#">Decouvrir Gramping</a>
            </li>
          </ul>
        </nav>
        <div className="user-actions">
          <button className="cart-icon">
            <i className="fas fa-shopping-cart"></i>
          </button>
          <button className="user-icon">
            <i className="fas fa-user"></i>
          </button>
          <button className="language-icon">
            <i className="fas fa-flag"></i>
          </button>
        </div>
      </header>
      <main className="main">
        <section className="hero">
          <div className="hero-content">
            <h2>Plus de 350 campings en France et en Europe</h2>
            <form className="search-form">
            <div className="form-group">
              <label htmlFor="location">
                <img src="location_icon.png" alt="Location Icon" width="30" height="30"  />
              </label>
              <input type="text" id="location" placeholder="Toulouse" />
            </div>
              <div className="form-group">
              <label htmlFor="calendar">
                <img src="calendar_icon.png" alt="Location Icon" width="30" height="30"  />
              </label>                <input type="date" id="dates" />
              </div>
              <div className="form-group">
              <label htmlFor="size">
                <img src="size_icon.png" alt="Location Icon" width="30" height="30"  />
              </label>                <input type="number" id="people" placeholder="2 pers." />
              </div>
              <button type="submit">Rechercher</button>
            </form>
          </div>
          <div className="hero-image">
            <img src="hero-image.jpg" alt="Camping Landscape" />
          </div>
        </section>
        <section className="offers">
          <h2>Nos offres exclusifs</h2>
          <div className="offers-container">
            <div className="offer">
              <img src="early-booking.jpg" alt="Early Booking Offer" />
              <div className="offer-content">
                <h3>Prolongation Gramping Cool!</h3>
                <p>Rendre vos séjours beaucoup plus interessants c'est notre affaire. Vos vacances 2024 jusqu'a -30% et dans de bonnes conditions en réservant jusqulau 26/07/2024. Paiement Jusqu'a 4 fois sans frais.</p>
                <a href="#" className="btn">En savoir plus</a>
              </div>
            </div>
            <div className="offer">
              <img src="new-campings.jpg" alt="New Campings Offer" />
              <div className="offer-content">
                <h3>Nouveaux campings et plus de 350 destinations a decouvrir</h3>
                <p>Pour cette nouvelle saison, Venez decouvrir plus de 350 destinations ainsi de nouveaux campings.</p>
                <a href="#" className="btn">En savoir plus</a>
              </div>
            </div>
            <div className="offer">
              <img src="mobile-home.jpg" alt="Mobile Home Offer" />
              <div className="offer-content">
                <h3>Jusqu'à 2000 euros de remise!</h3>
                <p>Davenez proporietaire de votre mobile-home</p>
                <a href="#" className="btn">En savoir plus</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2023 Gramping</p>
          <ul>
            <li>
              <a href="#">Mentions légales</a>
            </li>
            <li>
              <a href="#">Politique de confidentialité</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;