import React from "react";
import Card from "./card";

const Articles = ({ articles }) => {

  return (
    <div className={'container-fluid'}>
      <div className={'row'}>
          {articles.map((article, i) => {
            return (
              <div className={'col-md-4'}>
                <Card
                  article={article}
                  key={`article__${article.node.slug}`}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Articles;
