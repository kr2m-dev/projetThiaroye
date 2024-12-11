import React from "react";
import { motion } from "framer-motion";
import "./Accueil.css"; // Assurez-vous d'ajouter le fichier CSS séparé

const Accueil = () => {
  return (
    <main className="main">
      <section className="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h2>Bienvenue au Lycée de Thiaroye</h2>
          <p>
            Votre porte vers l'excellence académique et le développement
            personnel.
          </p>
        </motion.div>
      </section>
      <div className="container">
        <section className="quick-links">
          {["Concours", "Universités", "Espace d'Échange", "Alumni"].map(
            (section, index) => (
              <motion.div
                className="quick-link"
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3>{section}</h3>
                <p>
                  {section === "Concours" &&
                    "Découvrez les opportunités de concours pour nos élèves"}
                  {section === "Universités" &&
                    "Explorez les options universitaires et les programmes disponibles"}
                  {section === "Espace d'Échange" &&
                    "Participez aux discussions et échangez avec la communauté"}
                  {section === "Alumni" &&
                    "Connectez-vous avec nos anciens élèves et partagez vos expériences"}
                </p>
                <a
                  href={`https://lyceethiaroye.edu.sn/${section.toLowerCase()}`}
                >
                  En savoir plus
                </a>
              </motion.div>
            )
          )}
        </section>

        <section className="news-section">
          <h2>Actualités du Lycée</h2>
          {[
            {
              title: "Cérémonie de remise des diplômes 2023",
              content:
                "La cérémonie annuelle de remise des diplômes aura lieu le 15 juillet 2023...",
            },
            {
              title: "Nouveau partenariat avec l'Université de Dakar",
              content:
                "Nous sommes ravis d'annoncer un nouveau partenariat avec l'Université de Dakar...",
            },
            {
              title: "Journée portes ouvertes 2023",
              content:
                "Rejoignez-nous le 10 septembre 2023 pour notre journée portes ouvertes annuelle...",
            },
          ].map((news, index) => (
            <motion.div
              className="news-item"
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.3 }}
            >
              <h3>{news.title}</h3>
              <p>{news.content}</p>
            </motion.div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default Accueil;
