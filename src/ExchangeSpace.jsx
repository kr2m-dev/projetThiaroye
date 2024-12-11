import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Importer framer-motion pour les animations
import "./ExchangeSpace.css";

const ExchangeSpace = () => {
  return (
    <div className="container">
      <h2>Espace d'Échange</h2>
      <p>Bienvenue dans notre espace d'échange. Ici, vous pouvez partager vos connaissances, poser des questions et interagir avec d'autres étudiants et enseignants.</p>
      
      {/* Section des cartes d'échange */}
      <div className="exchange-grid">
        {[
          { title: "Forum des Étudiants", description: "Discutez avec vos camarades de classe, posez des questions et partagez vos expériences.", button: "Accéder au Forum" },
          { title: "Tutorat en Ligne", description: "Obtenez de l'aide pour vos devoirs et révisions auprès d'étudiants plus âgés ou d'enseignants.", button: "Demander un Tuteur" },
          { title: "Ressources Partagées", description: "Accédez à une bibliothèque de ressources partagées par les étudiants et les enseignants.", button: "Explorer les Ressources" },
          { title: "Groupes d'Étude", description: "Rejoignez ou créez des groupes d'étude pour collaborer sur des projets ou réviser ensemble.", button: "Trouver un Groupe" }
        ].map((card, index) => (
          <motion.div
            key={index}
            className="exchange-card"
            whileHover={{ scale: 1.05 }} // Ajoute un effet d'agrandissement sur le survol
            whileTap={{ scale: 0.95 }}  // Ajoute un effet de réduction lorsque cliqué
          >
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <a href="#" className="btn">{card.button}</a>
          </motion.div>
        ))}
      </div>

      {/* Section Forum Vue.js remplacée par React */}
      <DiscussionForum />
    </div>
  );
};

const DiscussionForum = () => {
  const [topics, setTopics] = useState([
    { id: 1, title: "Préparation au Baccalauréat 2024", author: "Mme Diop", date: "2023-05-15" },
    { id: 2, title: "Club de Débat : Prochaine Rencontre", author: "M. Ndiaye", date: "2023-05-14" },
    { id: 3, title: "Orientation Post-Bac : Témoignages d'Alumni", author: "Fatou Sow", date: "2023-05-13" },
    { id: 4, title: "Programme d'Échange International : Opportunités", author: "Bureau des Relations Internationales", date: "2023-05-12" },
    { id: 5, title: "Atelier CV et Lettre de Motivation", author: "Mme Fall", date: "2023-05-11" }
  ]);

  const [newTopic, setNewTopic] = useState({ title: '', content: '' });

  const addNewTopic = () => {
    const currentDate = new Date().toISOString().split('T')[0];
    setTopics([
      { id: topics.length + 1, title: newTopic.title, author: "Utilisateur", date: currentDate },
      ...topics
    ]);
    setNewTopic({ title: '', content: '' });
    alert('Votre sujet a été publié avec succès!');
  };

  return (
    <div id="app">
      <div className="forum-container">
        <h2>Sujets de Discussion</h2>
        <ul className="topic-list">
          {topics.map(topic => (
            <li key={topic.id} className="topic-item">
              <div className="topic-title">{topic.title}</div>
              <div className="topic-meta">Posté par {topic.author} le {topic.date}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="new-topic-form">
        <h3>Créer un nouveau sujet</h3>
        <form onSubmit={e => { e.preventDefault(); addNewTopic(); }}>
          <div className="form-group">
            <label htmlFor="topicTitle">Titre du sujet:</label>
            <input type="text" id="topicTitle" value={newTopic.title} onChange={e => setNewTopic({ ...newTopic, title: e.target.value })} required />
          </div>
          <div className="form-group">
            <label htmlFor="topicContent">Contenu:</label>
            <textarea id="topicContent" value={newTopic.content} onChange={e => setNewTopic({ ...newTopic, content: e.target.value })} rows="4" required></textarea>
          </div>
          <button type="submit">Publier le sujet</button>
        </form>
      </div>
    </div>
  );
};

export default ExchangeSpace;
