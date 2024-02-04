// Fonction reportWebVitals pour mesurer les performances de l'application web
const reportWebVitals = onPerfEntry => {
  // Vérifie si onPerfEntry est une fonction
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Importation des fonctions de mesure des performances depuis le module 'web-vitals'
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Appel des fonctions de mesure des performances avec la fonction onPerfEntry
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

// Exportation de la fonction reportWebVitals comme export par défaut
export default reportWebVitals;
