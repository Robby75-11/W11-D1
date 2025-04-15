import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Article } from "../types/Article";

const ArticleDetailPage: React.FC = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`)
      .then(res => res.json())
      .then(data => setArticle(data));
  }, [id]);

  if (!article) return <p>Caricamento...</p>;

  return (
    <div>
      <h1>{article.title}</h1>
      <img src={article.image_url} alt={article.title} />
      <p><strong>Fonte:</strong> {article.news_site}</p>
      <p><strong>Pubblicato il:</strong> {new Date(article.published_at).toLocaleString()}</p>
      <p>{article.summary}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">Leggi l'articolo completo</a>
    </div>
  );
};

export default ArticleDetailPage;
