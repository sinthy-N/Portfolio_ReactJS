import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../client.js';
import '../styles/formulaire.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const SignUp = () => {

  const [formData, setFormData] = useState({
    fullName: '', email: '', password: ''
  })
  const [showPassword, setShowPassword] = useState(false);
  console.log(formData)

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }

    })

  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
          },
        },
      });

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

      alert("Vérifiez votre e-mail pour le lien de vérification");
    } catch (error) {
      alert(error.message);
    }
  }



  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div>
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <span>Formulaire d'inscription</span>
          </div>
          <form onSubmit={handleSubmit}>
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
            {/*             champ ci-dessous commenté car ce n'est pas encore mis en place
 */}{/*             <div className="pass">
              <a href="#">Forgot password?</a>
            </div> */}
            <div className="row button">
              <input type="submit" value="S'inscrire" />
            </div>
            <div className="login-link">
              Vous avez déjà un compte ? <Link to='/'>Connexion</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp