import React, { useEffect, useState } from "react";
import { Article } from "../types/Article";
import ArticleCard from "./ArticleCard";

const ArticleList: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles")
      .then(res => res.json())
      .then(data => setArticles(data.results));
  }, []);

  return (
    <div className="grid">
      {articles.map(article => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;