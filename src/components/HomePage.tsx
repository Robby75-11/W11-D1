import React from "react";
import ArticleList from "./ArticleList";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>🛰️ Spaceflight News</h1>
      <ArticleList />
    </div>
  );
};

export default HomePage;