// Importation des bibliothèques et dépendances nécessaires
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../client.js';
import '../styles/formulaire.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// Définition du composant fonctionnel Login
const Login = ({ setToken }) => {
  // Initialisation du navigateur pour la redirection
  let navigate = useNavigate();

  // État local pour gérer les données du formulaire
  const [formData, setFormData] = useState({
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

  // Fonction asynchrone pour gérer la soumission du formulaire
  async function handleSubmit(e) {
    e.preventDefault();
  
    try {
      // Utilisation de Supabase pour l'authentification avec les informations du formulaire
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
  
      // Gestion des erreurs
      if (error) {
        if (error.message.includes("Invalid login credentials")) {
          throw new Error("Les informations d'identification sont invalides");
        }
        throw error;
      }
  
      // Affichage des données de connexion dans la console, mise à jour du token, et redirection vers la page d'accueil
      console.log(data);
      setToken(data);
      navigate('/homepage');
    } catch (error) {
      // Affichage d'une alerte en cas d'erreur avec le message modifié
      alert(error.message);
    }
  }
  
  // Fonction pour basculer entre l'affichage et la non-affichage du mot de passe
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  // Rendu JSX du composant
  return (
    <div>
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <span>Formulaire de connexion</span>
          </div>
          {/* Formulaire avec gestion des événements onSubmit */}
          <form onSubmit={handleSubmit}>
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
              <input type="submit" value="Connexion" />
            </div>
            {/* Lien vers la page d'inscription */}
            <div className="signup-link">
              Vous n'êtes pas membre ? <Link to="/signup">S'inscrire</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Exportation du composant Login
export default Login;
