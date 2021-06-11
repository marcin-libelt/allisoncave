import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Card = ({ article }) => {
  return (

<>
  <Link to={`/blog/${article.node.slug}`} className=""><GatsbyImage
        image={article.node.image.url}
        alt={`Hero image`}
  /></Link>
  <p>{article.node.title}</p>
  <p>{article.node.description}</p>
  <Link to={`/blog/${article.node.slug}`} className="">{'Read More'}</Link>
</>
  );
};

export default Card;
