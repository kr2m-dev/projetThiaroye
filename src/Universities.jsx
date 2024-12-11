import React from "react";
import "./Universities.css"; // Ajoutez votre feuille de style personnalisée ici
import Ucad from './images/ucad.jpeg'
import Uam from './images/uam.jpeg'
const Universities = () => {
  // Liste des universités avec leurs informations
  const universities = [
    {
      name: "Université Cheikh Anta Diop de Dakar (UCAD)",
      description:
        "La plus grande et la plus ancienne université du Sénégal, offrant une large gamme de programmes.",
      image: Ucad,
      link: "/universites/ucad",
      altText: "Vue aérienne du campus de l'Université Cheikh Anta Diop de Dakar",
    },
    {
      name: "Université Amadou Mahtar Mbow (UAM)",
      description:
        "Une université publique spécialisée dans les sciences et technologies.",
      image: Uam,
      link: "/universites/uam",
      altText: "Façade moderne de l'Université Amadou Mahtar Mbow",
    },
    {
      name: "École Supérieure Polytechnique (ESP)",
      description:
        "Une institution renommée pour la formation d'ingénieurs et de techniciens supérieurs.",
      image: "https://example.com/esp.jpg",
      link: "/universites/esp",
      altText: "Laboratoire de l'École Supérieure Polytechnique",
    },
    {
      name: "Institut Supérieur d'Enseignement Professionnel (ISEP)",
      description:
        "Un institut offrant des formations professionnelles courtes et adaptées au marché du travail.",
      image: "https://example.com/isep.jpg",
      link: "/universites/isep",
      altText:
        "Étudiants travaillant dans une salle informatique de l'ISEP",
    },
    {
      name: "Office National de Formation Professionnelle (ONFP)",
      description:
        "Un organisme proposant des formations professionnelles et techniques variées.",
      image: "https://example.com/onfp.jpg",
      link: "/universites/onfp",
      altText: "Atelier de formation pratique à l'ONFP",
    },
    {
      name: "Institut Africain de Management (IAM)",
      description:
        "Une école de commerce privée offrant des formations en gestion et management.",
      image: "https://example.com/iam.jpg",
      link: "/universites/iam",
      altText: "Bâtiment principal de l'Institut Africain de Management",
    },
  ];

  return (
    <div className="container">
      
      
      <main>
        <div className="university-info">
          <h2>Informations Universitaires</h2>
          <p>Découvrez les programmes universitaires disponibles pour les élèves du Lycée de Thiaroye.</p>

          <div className="university-list">
            {universities.map((university, index) => (
              <div className="university-item" key={index}>
                <img src={university.image} alt={university.altText} />
                <h3>{university.name}</h3>
                <p>{university.description}</p>
                <a href={university.link} className="btn">Voir les programmes</a>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Universities;
