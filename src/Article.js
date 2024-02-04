import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/Article.css';

//effectuer une requête HTTP afin de récupérer des données à partir d'une API
//composant Article
const Article = () => {
    //état local pour stocker les données de API
    const [articles, setArticles] = useState([]);

    //requête API au montage du composant
    useEffect(() => {
        //fonction asynchrone pour effectuer la requête
        const fetchData = async () => {
            try {
                //requête GET à l'API
                //lien des articles 'https://jsonplaceholder.typicode.com/posts'
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

                //vérifie si la réponse est un tableau
                if (Array.isArray(response.data)) {
                    //si oui => attribue directement à l'état articles
                    setArticles(response.data);
                } else {
                    //si non => met la réponse dans un tableau avant de l'attribuer à l'état articles
                    setArticles([response.data]);
                }
            } catch (error) {
                //gestion des erreurs lors de la requête
                console.error('Une erreur s\'est produite lors de la récupération des données de l\'API', error);
            }
        };

        //fonction fetchData
        fetchData();
    }, []); //tableau vide => ne dépend d'aucune prop ou état et exécute une seule fois au montage.

    //rendu conditionnel en fonction de l'état "articles"
    if (!articles || articles.length === 0) {
        // si pas d'articles => affiche un message de chargement
        return <div>Chargement...</div>;
    }

    //si des articles sont présents, génère une liste d'articles
    return (
        <div className="articles-container">
{/*             parcourir les élements d'un tableau
 */}            {articles.map(article => (
                <div key={article.id} className="article">
                    <p>UserId: {article.userId}</p>
                    <p>Id: {article.id}</p>
                    <p>Titre: {article.title}</p>
                    <p>Body: {article.body}</p>
                </div>
            ))}
        </div>
    );
};

// Exportation du composant Article
export default Article;