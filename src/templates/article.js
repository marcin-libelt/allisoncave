import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
const ArticleTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiArticle.title}</h1>
    <p>
      by{" "}
      <Link to={`/authors/User_${data.strapiArticle.author.id}`}>
        {data.strapiArticle.author.name}
      </Link>
    </p>
    <Img fixed={data.strapiArticle.image.url} />
    <p>{data.strapiArticle.content}</p>
  </Layout>
)
export default ArticleTemplate
export const query = graphql`
    query ArticleTemplate($id: Int!) {
        strapiArticle(strapiId: { eq: $id }) {
            title
            content
            image {
                url
            }
            author {
                id
                name
            }
        }
    }
`