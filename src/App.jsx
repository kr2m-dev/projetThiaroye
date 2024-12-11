import React from "react";
import { motion } from "framer-motion"; // Utilisation de Framer Motion pour les animations
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css"; // Fichier global CSS
import Accueil from "./Accueil"; // Importer le composant Accueil
import Universities from "./Universities";
import Concours from "./Concours";
import ExchangeSpace from "./ExchangeSpace";

function App() {
  return (
    <Router>
      <div className="app">
        {/* En-tête avec animation */}
        <header className="header">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Lycée de Thiaroye
          </motion.h1>
        </header>

        {/* Barre de navigation */}
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/Concours">Concours</Link>
            </li>
            <li>
              <Link to="/Universities">Universités</Link>
            </li>
            <li>
              <Link to="/ExchangeSpace">Espace d'Échange</Link>
            </li>
            <li>
              <Link to="/alumni">Alumni</Link>
            </li>
          </ul>
        </nav>

        {/* Routes pour afficher les pages spécifiques */}
        <main className="main">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/Concours" element={<Concours />} />
            <Route path="/Universities" element={<Universities />} />
            <Route path="/ExchangeSpace" element={<ExchangeSpace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
