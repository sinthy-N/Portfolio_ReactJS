import React from 'react';
import { useNavigate } from 'react-router-dom';
import Article from '../Article'; // Importez le composant Article


const Homepage = ({ token }) => {
  let navigate = useNavigate();

  function handleLogout() {
    sessionStorage.removeItem('token');
    navigate('/');
  }

  return (
    <div style={{ overflowY: 'auto', height: '100vh'}}>
      {/* Navbar */}
      <div style={{ backgroundColor: '#f8f9fa', padding: '15px', marginBottom: '20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="#home" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h1>{token.user.user_metadata.full_name}</h1>
          </a>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#profil" style={{ textDecoration: 'none', color: 'inherit' }}>Profil</a>
            <a href="#competences" style={{ textDecoration: 'none', color: 'inherit' }}>Compétences</a>
            <a href="#experiences" style={{ textDecoration: 'none', color: 'inherit' }}>Expériences</a>
            <a href="#formations" style={{ textDecoration: 'none', color: 'inherit' }}>Formations</a>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <div>
        <div id='profil' style={{ backgroundColor: '#007BFF', color: '#fff', padding: '5% 0' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ marginBottom: '10px' }}>Sinthy</div>
            <div>Cheffe de projet Digital</div>
          </div>
        </div>

        <div id='competences' style={{ backgroundColor: '#6C757D', color: '#fff', padding: '5% 0' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2>Compétences</h2>
            <ul style={{ listStyleType: 'none', padding: '0' }}>
              <li style={{ marginLeft: '20px' }}>Organiser</li>
              <li style={{ marginLeft: '20px' }}>Passionné</li>
              <li style={{ marginLeft: '20px' }}>Travail d'équipe</li>
            </ul>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div id='experiences' style={{ backgroundColor: '#17A2B8', color: '#fff', padding: '5% 0', width: '48%' }}>
            <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
              <h2>Expérience Professionnelle</h2>
              <div><b>Stage</b></div>
              <div>Wordpress/Elementor</div>
            </div>
          </div>

          <div id='formations' style={{ color: '#000', padding: '5% 0', width: '48%' }}>
            <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
              <h2>Formations</h2>
              <div><b>2022-2026 : Ecole Hexagone</b></div>
              <div>Titre RNCP : Mastères</div>
            </div>
          </div>
        </div>
      </div>
      {/* Section des articles */}
      <div>
        <h2>Articles</h2>
        <Article />
      </div>
    </div>
  );
};

export default Homepage;
