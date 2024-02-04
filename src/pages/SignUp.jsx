// Importation des bibliothèques et dépendances nécessaires
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../client.js';
import '../styles/formulaire.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// Définition du composant fonctionnel SignUp
const SignUp = () => {
  // État local pour gérer les données du formulaire
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  // État local pour gérer la visibilité du mot de passe
  const [showPassword, setShowPassword] = useState(false);

  // Affiche les données du formulaire dans la console à chaque changement
  console.log(formData);

  // Fonction pour mettre à jour l'état des données du formulaire lors des changements dans les champs
  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  // Fonction asynchrone pour gérer la soumission du formulaire d'inscription
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      // Utilisation de Supabase pour l'inscription avec les informations du formulaire
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
          },
        },
      });

      // Gestion des erreurs lors de l'inscription
      if (error) {
        if (
          error.message.includes("duplicate key value violates unique constraint") ||
          error.message.includes("identifiant d'utilisateur déjà utilisé")
        ) {
          throw new Error(
            "L'adresse e-mail est déjà utilisée. Veuillez choisir une autre adresse e-mail."
          );
        } else if (
          error.message.includes("Password should be at least 6 characters")
        ) {
          throw new Error("Le mot de passe doit comporter au moins 6 caractères.");
        } else if (
          error.message.includes("Email rate limit exceeded")
        ) {
          throw new Error("Limite de fréquence d'envoi d'e-mails dépassée. Veuillez réessayer plus tard.");
        } else {
          throw error;
        }
      }

      // Affichage d'une alerte pour indiquer que l'inscription a réussi
      alert("Vérifiez votre e-mail pour le lien de vérification");
    } catch (error) {
      // Affichage d'une alerte en cas d'erreur avec le message d'erreur
      alert(error.message);
    }
  }

  // Fonction pour basculer entre l'affichage et la non-affichage du mot de passe
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  // Rendu JSX du composant SignUp
  return (
    <div>
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <span>Formulaire d'inscription</span>
          </div>
          {/* Formulaire avec gestion des événements onSubmit */}
          <form onSubmit={handleSubmit}>
            {/* Champ pour le nom complet */}
            <div className="row">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Nom complet :"
                required
                name="fullName"
                onChange={handleChange}
              />
            </div>
            {/* Champ pour l'email */}
            <div className="row">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Email : "
                required
                name="email"
                onChange={handleChange}
              />
            </div>
            {/* Champ pour le mot de passe avec icône pour afficher/masquer le mot de passe */}
            <div className="row">
              <i className="fas fa-user"></i>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Mot de passe : "
                required
                name="password"
                onChange={handleChange}
              />
              <div className="eye-icon" onClick={togglePasswordVisibility}>
                <FontAwesomeIcon
                  icon={showPassword ? faEye : faEyeSlash}
                />
              </div>
            </div>
            {/* Champ pour la récupération de mot de passe (commenté car non implémenté) */}
            {/* <div className="pass">
              <a href="#">Forgot password?</a>
            </div> */}
            {/* Bouton de soumission du formulaire */}
            <div className="row button">
              <input type="submit" value="S'inscrire" />
            </div>
            {/* Lien vers la page de connexion */}
            <div className="login-link">
              Vous avez déjà un compte ? <Link to='/'>Connexion</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// Exportation du composant SignUp
export default SignUp;
