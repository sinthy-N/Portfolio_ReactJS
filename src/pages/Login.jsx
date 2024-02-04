import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../client.js';
import '../styles/formulaire.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = ({ setToken }) => {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  console.log(formData);

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
  
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
  
      if (error) {
        if (error.message.includes("Invalid login credentials")) {
          throw new Error("Les informations d'identification sont invalides");
        }
        throw error;
      }
  
      console.log(data);
      setToken(data);
      navigate('/homepage');
    } catch (error) {
      alert(error.message); // Afficher le message d'erreur modifié
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
            <span>Formulaire de connexion</span>
          </div>
          <form onSubmit={handleSubmit}>
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
              <input type="submit" value="Connexion" />
            </div>
            <div className="signup-link">
            Vous n'êtes pas membre ? <Link to="/signup">S'inscrire</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;