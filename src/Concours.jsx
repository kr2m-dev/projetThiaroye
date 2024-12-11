import React from "react";
import { motion } from "framer-motion";
import './Concours.css'; // Pour le style

const Concours = () => {
  const concoursData = [
    {
      title: "Olympiades de Mathématiques",
      description: "Un concours national pour les passionnés de mathématiques.",
      date: "15 septembre 2023",
      lieu: "Lycée de Thiaroye",
      link: "https://lyceethiaroye.edu.sn/concours/olympiades-maths"
    },
    {
      title: "Concours Général Sénégalais",
      description: "Le prestigieux concours national pour les meilleurs élèves du Sénégal.",
      date: "1er au 5 octobre 2023",
      lieu: "Dakar",
      link: "https://lyceethiaroye.edu.sn/concours/concours-general"
    },
    {
      title: "Défi Scientifique",
      description: "Un concours interdisciplinaire mêlant physique, chimie et biologie.",
      date: "20 novembre 2023",
      lieu: "Université Cheikh Anta Diop",
      link: "https://lyceethiaroye.edu.sn/concours/defi-scientifique"
    },
    {
      title: "Concours d'Éloquence",
      description: "Démontrez vos talents oratoires et votre maîtrise de la langue française.",
      date: "5 décembre 2023",
      lieu: "Alliance Française de Dakar",
      link: "https://lyceethiaroye.edu.sn/concours/eloquence"
    },
    {
      title: "Hackathon Jeunes Innovateurs",
      description: "Un défi de programmation et d'innovation technologique pour les lycéens.",
      date: "15-16 janvier 2024",
      lieu: "Dakar Innovation Hub",
      link: "https://lyceethiaroye.edu.sn/concours/hackathon"
    },
    {
      title: "Concours d'Art et Culture",
      description: "Exprimez votre créativité à travers la peinture, la sculpture ou la photographie.",
      date: "1er février 2024",
      lieu: "Musée Théodore Monod d'Art Africain",
      link: "https://lyceethiaroye.edu.sn/concours/art-culture"
    }
  ];

  return (
    <div className="container">
      <h2>Concours disponibles pour les élèves</h2>
      <p>Découvrez les opportunités de concours pour développer vos compétences et tester vos connaissances.</p>
      
      <motion.div 
        className="concours-list"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        {concoursData.map((concours, index) => (
          <motion.div 
            key={index} 
            className="concours-item"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3>{concours.title}</h3>
            <p>{concours.description}</p>
            <p className="date">Date : {concours.date}</p>
            <p className="lieu">Lieu : {concours.lieu}</p>
            <a href={concours.link} className="btn">Plus d'infos</a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Concours;
