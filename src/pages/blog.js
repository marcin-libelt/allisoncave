import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout"
import Seo from "../components/seo"
import ArticlesComponent from "../components/articles";
import Intro from "../components/intro"
import image from '../images/woman-sitting-on-chair-while-reading-1194410.jpg';

const BlogPage = () => {
  const data = useStaticQuery(query);

  return (
  <Layout >
    <Seo title="Blog" />
    <h1 className={'sr-only'}>{data.strapiHomepage.hero.title}</h1>
    <Intro title={'Read all about it'} image={image}/>
    <ArticlesComponent articles={data.allStrapiArticle.edges} />
  </Layout>
)}

const query = graphql`
    query {
        strapiHomepage {
            hero {
                title
            }
            seo {
                metaTitle
                metaDescription
                shareImage {
                    id
                    formats {
                        large {
                            url
                        }
                    }
                }
            }
        }
        allStrapiArticle(filter: { status: { eq: "published" } }) {
            edges {
                node {
                    strapiId
                    slug
                    title
                    description
                    image {
                        url
                    }
                    author {
                        name
                        picture {
                            url
                        }
                    }
                }
            }
        }
    }
`;

export default BlogPage;