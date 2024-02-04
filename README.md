# Documentation du Projet ReactJS - Portfolio

## Introduction

Ce projet est un site de portfolio développé en utilisant ReactJS. Il propose une structure organisée avec des fonctionnalités telles que la gestion des utilisateurs (connexion et inscription) via Supabase, ainsi qu'une intégration d'API pour afficher des articles sur la page d'accueil.

## Structure du Projet

La structure du projet est organisée de manière logique pour faciliter la maintenance et la compréhension. Voici un aperçu des principaux répertoires et fichiers :

- **`src/` :** Contient le code source du projet.
  - **`pages/` :** Comprend les composants de chaque page.
  - **`styles/` :** Contient les fichiers de styles CSS.
  - **`client.js` :** Fichier de configuration pour la connexion à Supabase.
  - **`index.js` :** Point d'entrée de l'application.
  - **`Article.js` :** Composant pour la gestion des articles.
  - **`App.js` (ou `App.jsx`):** Fichier principal définissant les routes et gérant l'état global.
  - **`setupTests.js` :** Configuration pour les tests Jest.

## Gestion des Utilisateurs avec Supabase



### Connexion (`Login.jsx`) et Inscription (`SignUp.jsx`)

Les pages de connexion et d'inscription utilisent Supabase pour gérer l'authentification. Les données des utilisateurs sont stockées dans une base de données Supabase. Le composant `client.js` configure la connexion à Supabase.
<br>
<img src="./public/images/bd_user.png" width="300"/>
<br>

- **`Login.jsx` :** Permet à l'utilisateur de se connecter à son compte existant.
<br>
<img src="./public/images/login_pw_no.png" width="300"/>
<img src="./public/images/login_pw_see.png" width="300"/>
<br>
- **`SignUp.jsx` :** Permet à l'utilisateur de créer un nouveau compte. Un e-mail de confirmation est envoyé à l'utilisateur depuis "noreply@mail.app.supabase.io".
<br>
<img src="./public/images/signup_pw_no.png" width="300"/>
<img src="./public/images/signup_pw_see.png" width="300"/>
<br>
<img src="./public/images/mail_confirmation.png" width="300"/>
<br>

### Stockage du Token

Le token d'authentification est stocké dans la session via `sessionStorage`. Si un utilisateur est déjà connecté (le token est présent dans `sessionStorage`), il est automatiquement redirigé vers la page d'accueil.


## Déconnexion

La page d'accueil (`Homepage.jsx`) contient un bouton "Logout" qui permet à l'utilisateur de se déconnecter. En cliquant sur ce bouton, l'utilisateur est redirigé vers la page de connexion (`Login.jsx`).
<br>
<img src="./public/images/homepage.png" width="300"/>
<br>


## Intégration d'API pour les Articles

La page d'accueil (`Homepage.jsx`) intègre des articles à partir de l'API JSONPlaceholder. Le composant `Article.js` effectue une requête Axios pour récupérer les articles et les affiche de manière structurée.

- **`Article.js` :** Composant pour la gestion et l'affichage des articles.
- **`styles/Article.css` :** Styles spécifiques pour la mise en page des articles.
<br>
<img src="./public/images/articles.png" width="300"/>
<br>


## Conclusion

Ce projet ReactJS offre une architecture claire et modulaire pour un site de portfolio. L'utilisation de Supabase pour la gestion des utilisateurs et Axios pour l'intégration d'API contribue à la robustesse et à la flexibilité de l'application. Il fournit également une base solide pour des fonctionnalités futures et des améliorations continues.